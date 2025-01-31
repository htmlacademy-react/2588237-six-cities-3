import { Offers } from '../../types/offer';

export const filterFavorites = (arr: Offers): Record<string, Offers> => {
  const result = arr.reduce((acc, item) => {
    if (item.isFavorite) {
      const cityName = item.city.name;

      if (!acc[cityName]) {
        acc[cityName] = [];
      }

      acc[cityName].push(item);
    }

    return acc;
  }, {} as Record<string, Offers>);

  return result;
};
