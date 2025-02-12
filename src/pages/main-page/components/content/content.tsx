import { useState } from 'react';
import MyMap from '../../../../components/my-map/my-map';
import { TOffer } from '../../../../types/offer';
import { Page } from '../../../../const';
import OffersEmpty from '../offers-empty/offers-empty';
import Offers from '../offers/offers';

type ContentProps = {
  offers: TOffer[];
  placesCount: number;
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

function Content({offers, placesCount, isEmpty}: ContentProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<TOffer | undefined>(undefined);

  const handleListItemHover = (listItemName: string | undefined) => {
    const currentPoint = offers.find((point: TOffer) => point.id === listItemName);

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
        {isEmpty || <MyMap points={offers} selectedPoint={selectedPoint} page={Page.Main} />}
      </div>
    </div>
  );
}

export default Content;
