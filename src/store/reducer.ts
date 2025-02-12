import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, updateOffers } from './action';
import { TOffer, TOffers } from '../types/offer';

const DEFAULT_CITY = 'Paris';

const getOffersByCity = (city: string, data: TOffers): TOffers => data.filter((item: TOffer) => item.city.name === city);

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  offersByCity: getOffersByCity(DEFAULT_CITY, offers),
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      state.offersByCity = getOffersByCity(action.payload, state.offers);
    });
});

export {reducer};
