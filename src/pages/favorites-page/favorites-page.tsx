import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import { Offers } from '../../types/offer';
import FavoriteCard from '../../components/favorite-card/favorite-card';

type FavoritesPageProps = {
  offers: Offers;
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const isAuth = true;

  return (
    <div className="page">
      <Helmet>
        <title>Избранные товары</title>
      </Helmet>

      <PageHeader isAuth={isAuth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.isFavorite && offer.city.name === 'Amsterdam').map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.isFavorite && offer.city.name === 'Cologne').map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>

  );
}

export default FavoritesPage;
