import { Helmet } from 'react-helmet-async';
import CityFilters from './components/city-filters/city-filters';
import PageHeader from '../../components/page-header/page-header';
import { Offers } from '../../types/offer';
import Content from './components/content/content';

type MainPageProps = {
  placesCount: number;
  offers: Offers;
  isAuth: boolean;
}

function MainPage({placesCount, offers, isAuth}: MainPageProps): JSX.Element {
  const city = offers[0].city;

  const isEmpty = offers.length === 0;
  const currentCity = 'Amsterdam';

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      {<PageHeader isAuth={isAuth} />}

      <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          {<CityFilters currentCity={currentCity} />}
        </div>

        <div className="cities">
          <Content city={city} placesCount={placesCount} offers={offers} isEmpty={isEmpty} />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
