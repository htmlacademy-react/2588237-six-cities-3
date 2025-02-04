import { Helmet } from 'react-helmet-async';
import AmenityList from '../../components/amenity-list/amenity-list';
import Features from '../../components/features/features';
import Gallery from '../../components/gallery/gallery';
import PageHeader from '../../components/page-header/page-header';
import Price from '../../components/price/price';
import Rating from '../../components/rating/rating';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsItem from '../../components/reviews-item/reviews-item';
import { useLocation } from 'react-router-dom';
import { FullOffers, Offers } from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';
import HostUser from '../../components/host-user/host-user';
import { Reviews } from '../../types/review';
import { MAX_SHOW_REVIEWS, SortType } from '../../const';
import { getReviewsById, sortReviews } from '../../utils';

type OfferPageProps = {
  offers: Offers;
  fullOffers: FullOffers;
  reviews: Reviews;
}

function OfferPage({offers, fullOffers, reviews}: OfferPageProps): JSX.Element {
  const isAuth = true;
  const {pathname} = useLocation();

  const urlId = pathname.replace('/offer/', '');

  /* OFFER DATA */
  const fullOffer = fullOffers.filter((item) => item.id === urlId)[0];
  const {images, title, isPremium, isFavorite, description, type, bedrooms, maxAdults, price, goods, host, rating} = fullOffer;

  /* REVIEWS DATA */
  const filteredReviews = sortReviews(getReviewsById(urlId, reviews), SortType.Down);

  const isShowReviews = filteredReviews.length > 0;

  const activeFavoriteButtonClass = isFavorite ? 'offer__bookmark-button--active' : '';

  return (
    <div className="page">
      <Helmet>
        <title>Информация о товаре</title>
      </Helmet>

      <PageHeader isAuth={isAuth} />

      <main className="page__main page__main--offer">

        <section className="offer">
          <div className="offer__gallery-container container">
            <Gallery images={images} />
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>

                <button className={`offer__bookmark-button ${activeFavoriteButtonClass} button`} type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>

                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <Rating rating={rating} />

              <Features features={{type, bedrooms, maxAdults}} />

              <Price price={price} />

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>

                <AmenityList goods={goods} />
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>

                <HostUser user={host} />

                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{filteredReviews.length}</span></h2>
                {
                  isShowReviews &&
                    <ul className="reviews__list">
                      {filteredReviews
                        .slice(0, MAX_SHOW_REVIEWS)
                        .map((review) => <ReviewsItem key={`review-${review.id}`} review={review} />)}
                    </ul>
                }

                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map" />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <div className="near-places__list places__list">
              {offers.slice(0, 3).map((data) => <OfferCard key={data.id} offer={data} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
