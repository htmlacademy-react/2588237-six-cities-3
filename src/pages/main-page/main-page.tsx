import { Helmet } from 'react-helmet-async';
import CityFilters from '../../components/city-filters/city-filters';
import PageHeader from '../../components/page-header/page-header';
import Sort from '../../components/sort/sort';
import { Offers } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';

type MainPageProps = {
  placesCount: number;
  offers: Offers;
  isAuth: boolean;
}

function MainPage({placesCount, offers, isAuth}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      {<PageHeader isAuth={isAuth} />}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          {<CityFilters />}
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>

              <Sort />

              <OffersList offers={offers} />
            </section>

            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
