import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  onListItemHover?: (listItemName: string | undefined) => void;
}

function OffersList({offers, onListItemHover}: OffersListProps): JSX.Element {


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onListItemHover={onListItemHover}/>)}
    </div>
  );
}

export default OffersList;
