import "./rating.css";
import {AiFillStar} from 'react-icons/ai'
const Rating = ({rating,reviews}) => {
  return (
    <div className="rating-wrapper">
      <b className="rating">
        {rating} <AiFillStar /> 
      </b>
      <span>{reviews} reviews </span>
    </div>
  );
};

export default Rating;
