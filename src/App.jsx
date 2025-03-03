import React from 'react';
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Vision from "./components/Vision.jsx";
import EmptyComponent from "./components/EmptyComponent.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Feedback from "./components/Feedback.jsx";
import Connection from "./components/Connection.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Footer from "./components/Footer.jsx";
import DesignServices from './components/DesignServices.jsx';

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Intro/>
      <AboutUs/>
      <Vision/>
      <EmptyComponent/>
      <DesignServices/>
      <Portfolio/>
      <Feedback/>
      <Connection/>
      <Footer/>
    </>
  );
};

export default App;
