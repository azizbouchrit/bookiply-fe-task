import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { FetchingPayload, Review } from "./types";
import { Store } from "./types";
import { fetchReviews } from "./../services/ReviewService";
export const SET_REVIEWS = "SET_REVIEWS";

export type ActionTypes = { type: typeof SET_REVIEWS; payload: Review[] };

export const setReviews = (reviews: Review[]): ActionTypes => ({
  type: SET_REVIEWS,
  payload: reviews,
});

export const getReviews =
  (payload: FetchingPayload): ThunkAction<void, Store, unknown, Action<string>> =>
  async (dispatch) => {
    const data = await fetchReviews(payload);
    dispatch(setReviews(data));
  };
