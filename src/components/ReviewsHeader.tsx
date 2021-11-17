import { useState } from "react";
import { useEffect } from "react";
import { getReviews } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./ReviewsHeader.css";
import { Store } from "../store/types";
import { useNumberDebounce, useStringDebounce } from "../utils/debounceHooks";

const ReviewsHeader = () => {
  const [channel, setChannel] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const dispatch = useDispatch();
  const reviewsCount = useSelector((state: Store) => state.count);

  //Allows us to only dispatch when the user stops typing
  //this allows us to make less API calls 
  const debouncedScore = useNumberDebounce(score, 250);
  const debouncedChannel = useStringDebounce(channel, 250);

  useEffect(() => {
    dispatch(
      getReviews({
        channel:
          debouncedChannel.toUpperCase() === "BOOKING.COM"
            ? "BOOKINGCOM"
            : debouncedChannel.toUpperCase(),
        score: debouncedScore ? debouncedScore : 0,
      })
    );
  }, [debouncedChannel, debouncedScore]);

  return (
    <div className='reviews-header'>
      <h1>{reviewsCount} Reviews</h1>
      <div className='filters'>
        <div className='form-group'>
          <label htmlFor='channel'>Filter by channel:</label>
          <input
            type='text'
            name='channel'
            placeholder='Holidu'
            onChange={(e) => setChannel(e.currentTarget.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='score'>Filter by score:</label>
          <input
            type='number'
            name='score'
            placeholder='4.5'
            onChange={(e) => setScore(parseFloat(e.currentTarget.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsHeader;
