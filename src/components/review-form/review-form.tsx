import { FormEvent, useState } from 'react';
import ReviewRating from '../review-rating/review-rating';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    review: '',
    rating: 0,
  });

  const MAX_COMMENT_LENGTH = 300;
  const MIN_COMMENT_LENGTH = 50;

  const isDisabled = formData.review.length < MIN_COMMENT_LENGTH || formData.review.length > MAX_COMMENT_LENGTH;

  const handleTextareaChange = (evt: FormEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();

    const {name, value} = evt.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputRatingChange = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const {name, value} = evt.target;
    setFormData({
      ...formData,
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

      <ReviewRating onChange={handleInputRatingChange} />

      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={formData.review}
        onChange={handleTextareaChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
