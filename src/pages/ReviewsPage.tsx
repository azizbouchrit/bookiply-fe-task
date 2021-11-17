import "./ReviewsPage.css";
import backGroundImage from "../assets/images/background.png";
import ReviewCard from "../components/ReviewCard";
import { useSelector } from "react-redux";
import { Store } from "../store/types";
import ReviewsHeader from "../components/ReviewsHeader";

const ReviewsPage = () => {
  const reviews = useSelector((state: Store) => state.reviews);
  
  return (
    <div className='reviews-page'>
      <div className='background-image'>
        <img
          src={backGroundImage}
          className='property-image'
          alt='image of the property'
        />
      </div>
      <div className='reviews-page__container'>
        <header className='reviews-page__header'>
          <h3>ID: 091021</h3>
          <h2>La Casa de las Flores</h2>
        </header>
        <div className='reviews-card'>
          <ReviewsHeader />
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          {reviews.length === 0 && (
            <h3>There are no Reviews for this Property</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
