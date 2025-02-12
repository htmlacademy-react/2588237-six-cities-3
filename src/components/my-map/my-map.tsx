import { useEffect, useRef } from 'react';
import { TFullOffer, TOffer, TOffers } from '../../types/offer';
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
  points: TOffers;
  selectedPoint: TOffer | TFullOffer | undefined;
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
  const {points, selectedPoint, page} = props;
  const city = points[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const {classname: mapContainerClassName} = settings[page];

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );

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
  }, [map, points, selectedPoint, city]);

  return (
    <section
      className={mapContainerClassName}
      ref={mapRef}
    />
  );
}

export default MyMap;
