import React from 'react';
import introImgMain from '../assets/images/intro-img-main.svg';
import introImgUp from '../assets/images/intro-img-up.svg';
import introImgLeft from '../assets/images/intro-img-left.svg';
import avatar1 from '../assets/images/avatar-1.png';
import avatar2 from '../assets/images/avatar-2.png';
import avatar3 from '../assets/images/avatar-3.png';
import "../styles/Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__images">
        <img src={introImgMain} alt="Main Image" className="intro__images--main"/>
        <img src={introImgUp} alt="Main Image" className="intro__images--up"/>
        <img src={introImgLeft} alt="Main Image" className="intro__images--left"/>
      </div>
      <div className="intro__content">
        <h1 className="h1 intro__content__heading">
          Unleash Your Space’s Potential
        </h1>
        <p className="p1 intro__content__description">
          Interior design is a dynamic field that combines creativity with technical expertise. Successful interior designers stay updated on design trends, materials and technologies to deliver innovative and personalized solutions to their clients.
        </p>
        <div className="intro__content__cta">
          <button className="btn2 intro__content__cta__explore__btn">
            Explore Now
          </button>
          <div className="intro__content__cta__stats">
            <div className="intro__content__cta__stats__avatars">
              <img src={avatar1} alt="Avatar"/>
              <img src={avatar2} alt="Avatar"/>
              <img src={avatar3} alt="Avatar"/>
            </div>
            <p className="p2 intro__content__cta__stats__count">
              750 + Happy Customers
            </p>
          </div>
        </div>
      </div>
      <div className="intro__decorator"></div>
    </div>
  );
};

export default Intro;
