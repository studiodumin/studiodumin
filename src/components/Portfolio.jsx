import React, { useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import arrowUpRight from "../assets/images/arrow-up-right.svg";
import studyRoom from "../assets/images/study-room.png";
import livingRoom from "../assets/images/living-room.png";
import interiorDesign from "../assets/images/interior-design.png";
import "../styles/Portfolio.scss";

const spacesData = [
  { title: "Study Room", image: studyRoom },
  { title: "Living Room", image: livingRoom },
  { title: "Interior Design", image: interiorDesign },
  { title: "Study Room", image: studyRoom },
  { title: "Living Room", image: livingRoom },
  { title: "Interior Design", image: interiorDesign },
  { title: "Study Room", image: studyRoom },
  { title: "Living Room", image: livingRoom },
  { title: "Interior Design", image: interiorDesign }
];

const Portfolio = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if(!scrollRef.current) return;

    const container = scrollRef.current;
    const cards = Array.from(container.children);
    const containerRect = container.getBoundingClientRect();

    let targetCard = null;

    if(direction === "next") {
      for(let card of cards) {
        const cardRect = card.getBoundingClientRect();
        if(cardRect.right > containerRect.right) {
          targetCard = card;
          break;
        }
      }
    }
    else {
      for(let i = cards.length - 1; i >= 0; i--) {
        const cardRect = cards[i].getBoundingClientRect();
        if(cardRect.left < containerRect.left) {
          targetCard = cards[i];
          break;
        }
      }
    }

    if(targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  return (
    <div id="projects" className="portfolio">
      <div className="portfolio__header">
        <div className="portfolio__header__content">
          <p className="p1">Our portfolio</p>
          <h1 className="h1">
            Bring Home Toucher to Every Part of Your House
          </h1>
        </div>
        <div className="portfolio__header__navigations">
          <button
            data-direction="back"
            onClick={() => handleScroll("back")}
            className="portfolio__header__navigations__btn"
          >
            <img src={leftArrow} alt="Back" />
          </button>
          <button
            data-direction="next"
            onClick={() => handleScroll("next")}
            className="portfolio__header__navigations__btn"
          >
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>

      <div className="portfolio__cards" ref={scrollRef}>
        {spacesData.map((space, index) => (
          <div key={index} className="portfolio__card">
            <img src={space.image} alt={space.title} className="portfolio__card__image" />
            <h2 className="h2">{space.title}</h2>
            <p className="p2">Interior design is all about how we experience spaces.</p>
            <div className="portfolio__card__action">
              <p className="p2">Learn More</p>
              <img src={arrowUpRight} alt="Learn More"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
