import { TFullOffer, TFullOffers } from '../../types/offer';

export const getOneOfferById = (offers: TFullOffers, urlId: string): TFullOffer => offers.filter((offer) => offer.id === urlId)[0];
