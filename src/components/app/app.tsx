import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { TOffers } from '../../types/offer';
import { fullOffers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';

type AppProps = {
  offers: TOffers;
}

function App({offers}: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                isAuth={authorizationStatus === AuthorizationStatus.Auth}
              />
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage isAuth={authorizationStatus === AuthorizationStatus.Auth} />} />
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
              isAuth={authorizationStatus === AuthorizationStatus.Auth}
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
