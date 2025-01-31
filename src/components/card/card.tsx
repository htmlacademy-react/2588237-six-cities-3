import { Link } from 'react-router-dom';
import { AppRoute, CardType } from '../../const';
import { Offer } from '../../types/offer';
import { getRating } from './utils';

type CardProps = {
  offer: Offer;
  cardType: string;
}

const getCardSettings = (cardType: string) => {
  let cardClassName = '';
  let imageWrapperClassName = '';
  let cardInfoClassName = '';

  let imgWidth = 260;
  let imgHeight = 200;

  switch(cardType) {
    case CardType.Offer:
      cardClassName = 'cities__card';
      imageWrapperClassName = 'cities__image-wrapper';

      break;
    case CardType.Favorite:
      cardClassName = 'favorites__card';
      imageWrapperClassName = 'favorites__image-wrapper';
      cardInfoClassName = 'favorites__card-info';

      imgWidth = 150;
      imgHeight = 110;

      break;
  }

  return {cardClassName, imageWrapperClassName, cardInfoClassName, imgWidth, imgHeight};
};

function Card({offer, cardType}: CardProps): JSX.Element {
  const {id, price, type, previewImage, rating, title, isFavorite, isPremium} = offer;

  const activeFavoriteButtonClass = isFavorite ? 'place-card__bookmark-button--active' : '';

  const {cardClassName, imageWrapperClassName, cardInfoClassName, imgWidth, imgHeight} = getCardSettings(cardType);

  return (
    <article className={`${cardClassName} place-card`}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className={`${imageWrapperClassName} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place image" />
        </a>
      </div>
      <div className={`${cardInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>

          <button className={`place-card__bookmark-button ${activeFavoriteButtonClass} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{'width':`${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', id)}>{title}</Link>
        </h2>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
