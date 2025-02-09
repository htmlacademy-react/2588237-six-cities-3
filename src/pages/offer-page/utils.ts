import { FullOffer, FullOffers } from '../../types/offer';

export const getOneOfferById = (offers: FullOffers, urlId: string): FullOffer => offers.filter((offer) => offer.id === urlId)[0];
