import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import { Offers } from '../../types/offer';
import { filterFavorites } from './utils';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import PageFooter from '../../components/page-footer/page-footer';

type FavoritesPageProps = {
  offers: Offers;
  isAuth: boolean;
}

function FavoritesPage({offers, isAuth}: FavoritesPageProps): JSX.Element {
  const filtered = filterFavorites(offers);

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
              {Object.entries(filtered).map((offer) => <FavoriteItem key={`city-${offer[0]}`} offer={offer} />)}
            </ul>
          </section>
        </div>
      </main>

      <PageFooter />
    </div>

  );
}

export default FavoritesPage;
