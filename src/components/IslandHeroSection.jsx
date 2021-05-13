import React from "react";
import { Button } from "./button";
import "../App.css";
import "./IslandHeroSection.css";

function IslandHeroSection({ src, islandLabel, islandShortDesc }) {
  return (
    <div className="hero-container">
      <div className="image-container">
        <img src={src} alt="" />
      </div>
      <h1>{islandLabel}</h1>
      <p>{islandShortDesc}</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Visit
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Go Eat
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Excursions
        </Button>
      </div>
    </div>
  );
}

export default IslandHeroSection;
