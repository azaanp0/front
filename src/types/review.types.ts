export interface Review {
  id: number;
  user_name: string;
  rating: number;
  body: string;
  created_at: string;
  avatar_url?: string;
}

export interface RatingBreakdown {
  star: 1 | 2 | 3 | 4 | 5;
  count: number;
  percent: number;
}
