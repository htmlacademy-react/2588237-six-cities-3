import { useEffect, useRef } from 'react';
import { City, FullOffer, Offer, Offers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map';
import { Page, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  city: City;
  points: Offers;
  selectedPoint: Offer | FullOffer | undefined;
  page: Page;
}

const settings = {
  [Page.Main]: {
    classname: 'cities__map map',
    width: '512px',
    height: '100%',
  },
  [Page.Offer]: {
    classname: 'offer__map map',
    width: '1144px',
    height: '579px',
  },
};

function MyMap(props: MapProps): JSX.Element {
  const {city, points, selectedPoint, page} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const {classname: mapContainerClassName} = settings[page];

  useEffect(() => {
    if (map) {
      points.forEach((point): void => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: point.id === selectedPoint?.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      className={mapContainerClassName}
      ref={mapRef}
    />
  );
}

export default MyMap;
