import { TOffers } from '../../types/offer';

export const filterFavorites = (arr: TOffers): Record<string, TOffers> => {
  const result = arr.reduce((acc, item) => {
    if (item.isFavorite) {
      const cityName = item.city.name;

      if (!acc[cityName]) {
        acc[cityName] = [];
      }

      acc[cityName].push(item);
    }

    return acc;
  }, {} as Record<string, TOffers>);

  return result;
};
