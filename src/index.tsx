import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PLACES_COUNT = 312;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount={PLACES_COUNT}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>
);
