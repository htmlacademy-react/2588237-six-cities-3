export type Review = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export type MockReview = {
  id: string;
  date: Review[];
}

export type Reviews = Review[];
export type AllMockReviews = MockReview[];
