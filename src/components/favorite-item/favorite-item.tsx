import { Offer } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesItemProps = {
  offer: [string, Offer[]];

};

function FavoriteItem({offer}: FavoritesItemProps): JSX.Element {
  const [city, points] = offer;

  return (
    <li className="favorites__locations-items" key={`city-${city}`}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        {points.map((point) => <FavoriteCard key={point.id} offer={point} />)}
      </div>
    </li>

  );
}

export default FavoriteItem;
