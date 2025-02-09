import { ChangeEvent, Fragment } from 'react';

type ReviewRatingProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}
const settings = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'good'},
  {value: 3, label: 'not bad'},
  {value: 2, label: 'badly'},
  {value: 1, label: 'terribly'},
];

function ReviewRating({onChange}: ReviewRatingProps): JSX.Element {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
  };

  return (
    <div className="reviews__rating-form form__rating">
      {settings.map(({value, label}) => (
        <Fragment key={`rating-${value}`} >
          <input onChange={handleChange} className="form__rating-input visually-hidden" name="rating" defaultValue={value} id={`${value}-stars`} type="radio" />
          <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={label}>
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}


export default ReviewRating;
