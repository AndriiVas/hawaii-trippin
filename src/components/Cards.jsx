import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards" id="cards">
      <h1>Check out these epic destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/maui-logo1.jpg"
              text="A beautiful blend of beaches, volcanoes, palm trees, and tropical agriculture"
              label="Best"
              path="/maui"
            />
            <CardItem
              src="images/kauai-logo1.png"
              text="The oldest in Hawaii’s modern-day chain, Kauaʻi has a reputation for being a lush island; hence, its nickname as the Garden Island"
              label="Greenest"
              path="/kauai"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/kona-logo1.png"
              text="Kona Coast is the prime area on Hawaii Islands for discovering marine life"
              label="Biggest"
              path="/kona"
            />

            <CardItem
              src="images/oahu-logo1.png"
              text="When you think of Oahu you think of the three S’s — sun, surf, and shopping"
              label="Touristy"
              path="/oahu"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
