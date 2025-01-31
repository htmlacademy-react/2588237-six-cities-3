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
import { FullOffer, FullOffers, Offer, Offers } from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OfferPageProps = {
  offers: Offers;
  fullOffers: FullOffers;
}

function OfferPage({offers, fullOffers}: OfferPageProps): JSX.Element {
  const isAuth = true;
  const {pathname} = useLocation();

  const urlId = pathname.replace('/offer/', '');

  const fullOffer = fullOffers.filter((item) => item.id === urlId)[0];
  const {images} = fullOffer;

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
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
              Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <Rating />

              <Features />

              <Price />

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>

                <AmenityList />
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>

                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                Angelina
                  </span>
                  <span className="offer__user-status">
                Pro
                  </span>
                </div>

                <div className="offer__description">
                  <p className="offer__text">
                A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>

                <ul className="reviews__list">
                  <ReviewsItem />
                </ul>

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
