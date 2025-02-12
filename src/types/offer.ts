export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
    name: string;
    location: TLocation;
}

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type THostUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TFullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: THostUser;
  images: string[];
  maxAdults: number;
}

export type TOffers = TOffer[];
export type TFullOffers = TFullOffer[];
