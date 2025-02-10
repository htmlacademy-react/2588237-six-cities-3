import { useState } from 'react';
import MyMap from '../../../../components/my-map/my-map';
import { City, Offer } from '../../../../types/offer';
import { Page } from '../../../../const';
import OffersEmpty from '../offers-empty/offers-empty';
import Offers from '../offers/offers';

type ContentProps = {
  offers: Offer[];
  placesCount: number;
  city: City;
  isEmpty: boolean;
}

const getComponentSettings = (isEmpty: boolean) => {
  let containerClassName = '';
  let sectionClassName = '';

  if (isEmpty) {
    containerClassName = 'cities__places-container cities__places-container--empty container';
    sectionClassName = 'cities__no-places';
  } else {
    containerClassName = 'cities__places-container container';
    sectionClassName = 'cities__places places';
  }

  return {containerClassName, sectionClassName};
};

function Content({offers, placesCount, city, isEmpty}: ContentProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const handleListItemHover = (listItemName: string | undefined) => {
    const currentPoint = offers.find((point: Offer) => point.id === listItemName);

    setSelectedPoint(currentPoint);
  };

  const {containerClassName, sectionClassName} = getComponentSettings(isEmpty);

  return (
    <div className={containerClassName}>
      <section className={sectionClassName}>
        {isEmpty && <OffersEmpty />}
        {!isEmpty && <Offers offers={offers} placesCount={placesCount} onListItemHover={handleListItemHover} />}
      </section>

      <div className="cities__right-section">
        {isEmpty || <MyMap city={city} points={offers} selectedPoint={selectedPoint} page={Page.Main} />}
      </div>
    </div>
  );
}

export default Content;
