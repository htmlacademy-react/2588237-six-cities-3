import { Helmet } from 'react-helmet-async';
import CityFilters from '../../components/city-filters/city-filters';
import PageHeader from '../../components/page-header/page-header';
import Sort from '../../components/sort/sort';
import { Offer, Offers } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import { useState } from 'react';
import MyMap from '../../components/my-map/my-map';
import { Page } from '../../const';

type MainPageProps = {
  placesCount: number;
  offers: Offers;
  isAuth: boolean;
}

function MainPage({placesCount, offers, isAuth}: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const city = offers[0].city;

  const handleListItemHover = (listItemName: string | undefined) => {
    const currentPoint = offers.find((point: Offer) => point.id === listItemName);

    setSelectedPoint(currentPoint);
  };

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

              <OffersList offers={offers} onListItemHover={handleListItemHover} />
            </section>

            <div className="cities__right-section">
              <MyMap city={city} points={offers} selectedPoint={selectedPoint} page={Page.Main} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
