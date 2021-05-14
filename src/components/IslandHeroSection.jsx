import React from "react";
import { Button } from "./button";
import "../App.css";
import "./IslandHeroSection.css";

function IslandHeroSection({ src, islandLabel, islandShortDesc }) {
  return (
    <div className="island-hero-container">
      <div className="image-container">
        <img src={src} alt="" />
      </div>
      <h1>{islandLabel}</h1>
      <p>{islandShortDesc}</p>
      <div className="hero-btns">
        <Button
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#visit")
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Visit
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#go-eat")
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Go Eat
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#excursions")
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }}
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
