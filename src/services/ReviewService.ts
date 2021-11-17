import axios from "axios";
import { FetchingPayload, Review } from "./../store/types";

export const fetchReviews = async (payload: FetchingPayload) => {
  let reviews: Review[] = [];
  const channel = payload.channel ? `channel=${payload.channel}&` : "";
  const score = payload.score ? `score=${payload.score}&` : "";
  try {
    const res = await axios.get(
      `https://interview-task-api.bookiply.io/reviews?${channel + score}`
    );
    console.log(res);
    
    reviews = res.data;
  } catch (e) {
    console.error(e);
  }
  return reviews;
};
