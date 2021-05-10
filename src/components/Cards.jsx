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
              src="images/maui-logo.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/maui"
            />
            <CardItem
              src="images/kauai-logo.png"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/kauai"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/kona-logo.png"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/kona"
            />

            <CardItem
              src="images/oahu-logo.png"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/oahu"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
