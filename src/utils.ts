import * as dayjs from 'dayjs';
import { AllMockReviews, Review, Reviews } from './types/review';
import { SortType } from './const';

export const getRating = (rating: number): number => {
  const MAX_RATING = 5;

  return (rating / MAX_RATING) * 100;
};

const compare = (a: string, b: string): number => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }

  return 0;
};

const sortDownReviews = (a: Review, b: Review) => compare(a.date, b.date);
const sortUpReviews = (a: Review, b: Review) => compare(b.date, a.date);

export const sortReviews = (reviews: Reviews, sortType: SortType): Reviews => {
  switch (sortType) {
    case SortType.Down:
      return reviews.toSorted(sortDownReviews);
    case SortType.Up:
      return reviews.toSorted(sortUpReviews);
    default:
      return reviews;
  }
};

export const getReviewsById = (id: string, reviews: AllMockReviews): Reviews | [] => {
  for (let i = 0; i <= reviews.length; i++) {
    if (reviews[i].id === id) {
      return reviews[i].data;
    }
  }

  return [];
};

export const humanizeDate = (date: string): string => dayjs(date).format('MMMM YYYY');
