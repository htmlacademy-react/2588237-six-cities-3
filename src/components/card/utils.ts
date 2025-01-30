export const getRating = (rating: number): number => {
  const MAX_RATING = 5;

  return (rating / MAX_RATING) * 100;
};
