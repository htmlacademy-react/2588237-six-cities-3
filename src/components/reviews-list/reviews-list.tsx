import { MAX_SHOW_REVIEWS } from '../../const';
import { Reviews } from '../../types/review';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews
        .slice(0, MAX_SHOW_REVIEWS)
        .map((review) => <ReviewsItem key={`review-${review.id}`} review={review} />)}
    </ul>
  );
}

export default ReviewsList;
