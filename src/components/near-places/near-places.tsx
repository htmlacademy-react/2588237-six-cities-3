import { TOffers } from '../../types/offer';
import NearPlacesList from '../near-places-list/near-places-list';

type NearPlacesProps = {
  offers: TOffers;
}

function NearPlaces({offers}: NearPlacesProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>

        <NearPlacesList offers={offers} />
      </section>
    </div>
  );
}

export default NearPlaces;
