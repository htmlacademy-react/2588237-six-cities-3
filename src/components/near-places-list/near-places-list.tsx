import { TOffers } from '../../types/offer';
import NearCard from '../near-card/near-card';

type NearPlacesListProps = {
  offers: TOffers;
}

const MAX_SHOW_CARDS = 3;

function NearPlacesList({offers}: NearPlacesListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.slice(0, MAX_SHOW_CARDS).map((data) => <NearCard key={data.id} offer={data} />)}
    </div>
  );
}

export default NearPlacesList;
