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
import HostUser from '../../components/host-user/host-user';
import { AllMockReviews } from '../../types/review';
import { MAX_SHOW_REVIEWS, Page, SortType } from '../../const';
import { getReviewsById, sortReviews } from '../../utils';
import MyMap from '../../components/my-map/my-map';
import NearCard from '../../components/near-card/near-card';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import NearPlaces from '../../components/near-places/near-places';

type OfferPageProps = {
  offers: Offers;
  fullOffers: FullOffers;
  reviews: AllMockReviews;
}

function OfferPage({offers, fullOffers, reviews}: OfferPageProps): JSX.Element {
  const isAuth = true;
  const {pathname} = useLocation();

  const urlId = pathname.replace('/offer/', '');

  /* OFFER DATA */
  const fullOffer = fullOffers.filter((item) => item.id === urlId)[0];
  const {images, title, isPremium, isFavorite, description, type, bedrooms, maxAdults, price, goods, host, rating} = fullOffer;

  const city = fullOffer.city;

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

          <MyMap city={city} points={offers} selectedPoint={fullOffer} page={Page.Offer} />
        </section>

        <NearPlaces offers={offers} />
      </main>
    </div>
  );
}

export default OfferPage;
