import { getRating } from '../../../../utils';

type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps): JSX.Element {
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{'width':`${getRating(rating)}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>

      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default Rating;
