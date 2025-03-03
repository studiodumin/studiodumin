import React, {useState} from 'react';
import DOMPurify from 'dompurify';
import blurLayer from "../assets/images/blur-layer.svg";
import customerImage from '../assets/images/customer-image.png';
import interiorDesign from "../assets/images/interior-design.png";
import star from "../assets/images/star.png";
import '../styles/Feedback.scss';
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";

const feedbacks = [
  {
    image: customerImage,
    rating: 5,
    name: "Jacklin Daniel",
    designation: "Co founder & CEO of intex",
    feedback: "We’ve used design agency for the last many years. We can’t understand how we’ve been living without web design agency,I am so pleased with this product,Absolutely wonderful! You won’t regret it.<br/>It’s really wonderful"
  },
  {
    image: customerImage,
    rating: 4,
    name: "Sophia Martinez",
    designation: "Creative Director at Vision Interiors",
    feedback: "The experience with this design agency has been incredible. They truly understand aesthetics and functionality. Our latest project exceeded expectations, and I couldn’t be happier with the results. Their attention to detail is outstanding!<br/>Looking forward to collaborating again."
  }
]

const Feedback = () => {
  const [curIndex, setCurIndex] = useState(0);

  const changeReview = (diff) => {
    setCurIndex((curIndex + diff + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="feedback">
      <div className="feedback__header">
        <p className="p1">Testimonial</p>
        <h1 className="h1">What Our Customers Says</h1>
      </div>
      <div className="feedback__content">
        <div className="feedback__content__image-container">
          <img src={blurLayer} alt="Blur layer" className="blur-layer"/>
          <img src={feedbacks[curIndex].image} alt="Customer"/>
        </div>
        <div className="feedback__content__description">
          <div className="feedback__content__description__rating">
            {Array.from({ length: feedbacks[curIndex].rating }, (_, i) => (
              <img key={i} src={star} alt="star"/>
            ))}
          </div>
          <p
            className="p1"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(feedbacks[curIndex].feedback) }}
          />
          <div>
            <h3 className="h3">{feedbacks[curIndex].name}</h3>
            <p className="p2">{feedbacks[curIndex].designation}</p>
          </div>
          {feedbacks.length > 1 && (
            <div className="feedback__content__description__navigations">
              <button
                data-direction="back"
                className="feedback__content__description__navigations__btn"
                onClick={() => changeReview(-1)}
              >
                <img src={leftArrow} alt="Back" />
              </button>
              <button
                data-direction="next"
                className="feedback__content__description__navigations__btn"
                onClick={() => changeReview(1)}
              >
                <img src={rightArrow} alt="Next" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
