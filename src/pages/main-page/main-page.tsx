import { Helmet } from 'react-helmet-async';
import Card from '../../components/card/card';
import Filters from '../../components/filters/filters';
import PageHeader from '../../components/page-header/page-header';
import Sort from '../../components/sort/sort';
import { Offers } from '../../types/offer';

type MainPageProps = {
  placesCount: number;
  offers: Offers;
}

function MainPage({placesCount, offers}: MainPageProps): JSX.Element {
  const isAuth = true;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      {<PageHeader isAuth={isAuth} />}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          {<Filters />}
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>

              {<Sort />}

              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
              </div>
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
