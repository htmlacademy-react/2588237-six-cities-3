import OffersList from '../../../../components/offers-list/offers-list';
import Sort from '../../../../components/sort/sort';
import { Offer } from '../../../../types/offer';

type OffersProps = {
  offers: Offer[];
  placesCount: number;
  onListItemHover: (listItemName: string | undefined) => void;
}

function Offers({offers, placesCount, onListItemHover}: OffersProps): JSX.Element {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in Amsterdam</b>

      <Sort />

      <OffersList offers={offers} onListItemHover={onListItemHover} />
    </>
  );
}

export default Offers;
