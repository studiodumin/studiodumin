import React from 'react';
import aboutUsImg from '../assets/images/about-us-img.svg';
import '../styles/AboutUs.scss';

const AboutUs = () => {
  return (
    <div id="about" className="about__us">
      <div className="about__us__content">
        <h3 className="h3">About Us</h3>
        <h2 className="h2">We make our spaces as nuanced as the lifestyles they reflect, no matter what season it may be.</h2>
        <div className="about__us__content__stats">
          <div className="about__us__content__stats__group">
            <h2 className="h2">400+</h2>
            <h3 className="h3">Our export</h3>
          </div>
          <div className="about__us__content__stats__group">
            <h2 className="h2">500+</h2>
            <h3 className="h3">Project done</h3>
          </div>
          <div className="about__us__content__stats__group">
            <h2 className="h2">4.5+</h2>
            <h3 className="h3">Out of 5.0</h3>
          </div>
        </div>
        <button className="btn2 about__us__content__learn__more">
          Learn More
        </button>
      </div>
      <div className="about__us__image">
        <img src={aboutUsImg} alt="Image"/>
      </div>
    </div>
  );
};

export default AboutUs;
