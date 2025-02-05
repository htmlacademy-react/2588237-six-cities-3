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
  data: Review[] | [];
}

export type Reviews = Review[];
export type AllMockReviews = MockReview[] | [];
