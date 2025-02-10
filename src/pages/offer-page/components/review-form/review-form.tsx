import { ChangeEvent, useState } from 'react';
import ReviewRating from '../review-rating/review-rating';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState({
    comment: '',
    rating: 0,
  });

  const MAX_COMMENT_LENGTH = 300;
  const MIN_COMMENT_LENGTH = 50;

  const isDisabledForm = review.rating < 1 || review.comment.length < MIN_COMMENT_LENGTH || review.comment.length > MAX_COMMENT_LENGTH;

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    evt.preventDefault();

    const {name, value} = evt.target;

    setReview({
      ...review,
      [name]: value,
    });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <ReviewRating onChange={handleChange} />

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={handleChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabledForm}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
