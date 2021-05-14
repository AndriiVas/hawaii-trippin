import React from "react";

import "../../App.css";
import Cards from "../Cards";

import HeroSection from "../HeroSection";
import ScrollToTopBtn from "../ScrollToTopBtn";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ScrollToTopBtn />
    </>
  );
}

export default Home;
