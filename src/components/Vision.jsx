import React from 'react';
import visionImg from '../assets/images/vision-img.png';
import '../styles/Vision.scss';

const Vision = () => {
  return (
    <div id="blog" className="vision">
      <div className="vision__content">
        <h1 className="h1">Meet Our Vision</h1>
        <p className="p2">
          Interior design is a dynamic field that combines creativity with technical expertise, Successful interior designers stay updated on design trends,materials and technologies to deliver innovative and personalized solutions to their clients.
        </p>
      </div>
      <img src={visionImg} alt="Image" className="vision__img"/>
    </div>
  );
};

export default Vision;
