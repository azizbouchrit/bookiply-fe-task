import { Store } from "./types";
import { ActionTypes, SET_REVIEWS } from "./actions";

export function reviewsReducer(
  state: Store = {
    reviews: [],
    count: 0
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        count: action.payload.length
      };
    default:
      return state;
  }
}
