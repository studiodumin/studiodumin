import React from 'react'
import residentDesign from "../assets/images/resident-design.png";
import spacePlanning from "../assets/images/space-planning.png";
import commercialDesign from "../assets/images/commercial-design.png";
import arrowUpRight from "../assets/images/arrow-up-right.svg";
import '../styles/DesignServices.scss';

const services = [
  {
    id: 1,
    title: "Residential Design",
    description:
      "They choose color schemes, materials and furnishings to create a cohesive and visually appealing atmosphere that aligns with the client’s preferences.",
    image: residentDesign,
  },
  {
    id: 2,
    title: "Space Planning",
    description:
      "They choose color schemes, materials and furnishings to create a cohesive and visually appealing atmosphere that aligns with the client’s preferences.",
    image: spacePlanning,
  },
  {
    id: 3,
    title: "Commercial Design",
    description:
      "They choose color schemes, materials and furnishings to create a cohesive and visually appealing atmosphere that aligns with the client’s preferences.",
    image: commercialDesign,
  },
];

const DesignService = () => {
  return (
    <section id="services" className="design-service">
      <div className="side-by-side">
        <div className='left'>
        <h1 className="h1">Providing Signature Interior Design Services</h1>
        </div>
        <div className="right">
        <p className="p2">
          Interior agencies offer a range of design services tailored to their clients' needs.
        </p>
      </div>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-card-left">
              <img src={service.image} alt={service.title}/>
              <h2 className="h2">{service.title}</h2>
            </div>
            <div className="service-card-right">
              <p className="p2">{service.description}</p>
              <button className="btn">
                <img src={arrowUpRight} alt="Learn More"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignService;
