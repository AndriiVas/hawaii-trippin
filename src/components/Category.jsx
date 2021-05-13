import React from "react";
import CardItem from "./CardItem";
import "./Category.css";

function Category(props) {
  return (
    <div className="cards__wrapper">
      <h1>{props.label}</h1>
      <ul className="cards__items">
        <CardItem
          src={props.item1ImageUrl}
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
          label="Adventure"
          path="/maui"
        />
        <CardItem
          src={props.item2ImageUrl}
          text="Travel through the Islands of Bali in a Private Cruise"
          label="Luxury"
          path="/kauai"
        />
        <CardItem
          src={props.item3ImageUrl}
          text="Travel through the Islands of Bali in a Private Cruise"
          label="Luxury"
          path="/kauai"
        />
        <CardItem
          src={props.item4ImageUrl}
          text="Travel through the Islands of Bali in a Private Cruise"
          label="Luxury"
          path="/kauai"
        />
      </ul>
    </div>
  );
}

export default Category;
