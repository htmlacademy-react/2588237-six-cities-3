import { Helmet } from 'react-helmet-async';
import CityFilters from './components/city-filters/city-filters';
import PageHeader from '../../components/page-header/page-header';
import Content from './components/content/content';
import { useAppSelector } from '../../hooks/store';

type MainPageProps = {
  isAuth: boolean;
}

function MainPage({isAuth}: MainPageProps): JSX.Element {

  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offersByCity);

  const isEmpty = offers.length === 0;

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
          <Content placesCount={offers.length} offers={offers} isEmpty={isEmpty} />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
