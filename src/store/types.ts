export interface Review {
  headline: string;
  comment: string;
  author: string;
  positiveFeedback: string | null;
  negativeFeedback: string | null;
  score: number;
  channel: string;
  publishedAt: string;
}

export interface Store {
  reviews: Review[];
  count: number;
}

export interface FetchingPayload {
  channel: string;
  score: number;
}
