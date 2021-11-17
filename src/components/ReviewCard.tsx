import holiduIcon from "../assets/icons/HOLIDU.svg";
import bookingComIcon from "../assets/icons/BOOKINGCOM.svg";
import airbnbIcon from "../assets/icons/AIRBNB.svg";
import thumbUp from "../assets/icons/thumb-up.svg";
import thumbDown from "../assets/icons/thumb-down.svg";
import "./ReviewCard.css";
import { Review } from "./../store/types";
import { formatDate } from "./../utils/dateFormat";

const ReviewCard = (props: ReviewCardProps) => {
  const getChannel = (channel: string) => {
    switch (channel) {
      case "BOOKINGCOM":
        return bookingComIcon;
      case "HOLIDU":
        return holiduIcon;
      default:
        return airbnbIcon;
    }
  };

  const { review } = props;

  return (
    <div className='review'>
      <div className='review-header'>
        <div className='rate-badge'>
          <span>{review.score}</span> / 5
        </div>
        <img src={getChannel(review.channel)} alt='' />
      </div>
      <div className='review-headline'>{review.headline} </div>
      <p className='review-text'>{review.comment}</p>
      {review.positiveFeedback && (
        <div className='review-text'>
          <img src={thumbUp} className='thumb-icon' alt='thumb up icon' />
          <span className='review-feedback'>{review.positiveFeedback}</span>
        </div>
      )}
      {review.negativeFeedback && (
        <div className='review-text'>
          <img src={thumbDown} className='thumb-icon' alt='thumb up icon' />
          <span className='review-feedback'>{review.negativeFeedback}</span>
        </div>
      )}
      <div className='review-author'>
        <div className='author-name'>{review.author}</div>
        <div className='review-date'>
          Reviewed {formatDate(review.publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

type ReviewCardProps = {
  review: Review;
};
