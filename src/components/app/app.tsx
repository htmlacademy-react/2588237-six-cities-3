import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';
import { fullOffers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';

type AppProps = {
  placesCount: number;
  offers: Offers;
}

function App({placesCount, offers}: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                placesCount={placesCount}
                offers={offers}
                isAuth={authorizationStatus === AuthorizationStatus.Auth}
              />
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage isAuth={false} />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesPage offers={offers} isAuth={authorizationStatus === AuthorizationStatus.Auth} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={
            <OfferPage
              offers={offers}
              fullOffers={fullOffers}
              reviews={reviews}
            />
          }
          />
          <Route path="*" element={<NotFoundPage isAuth={authorizationStatus === AuthorizationStatus.Auth} />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
