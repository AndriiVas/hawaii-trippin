import React from "react";
import "../../App.css";
import IslandHeroSection from "../IslandHeroSection";
import Item from "../Item";

const h1Style = {
  fontFamily: "Alessa",
  margin: "50px",
  fontSize: "80px",
};

export default function Maui() {
  return (
    <>
      <IslandHeroSection
        src=""
        islandLabel="Maui"
        islandShortDesc="My Favorite island!"
      />
      <div className="pre-headline" id="visit"></div>
      <h1 style={h1Style}>Visit</h1>

      <Item
        imageUrl="images/honolua-bay.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <Item
        imageUrl="images/img-home.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <Item
        imageUrl="images/img-home.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <div className="pre-headline" id="go-eat"></div>
      <h1 style={h1Style} id="go-eat">
        Go Eat
      </h1>
      <Item
        imageUrl="images/img-home.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <Item
        imageUrl="images/img-home.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <Item
        imageUrl="images/img-home.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <div className="pre-headline" id="excursions"></div>
      <h1 style={h1Style} id="excursions">
        Excursions
      </h1>
      <Item
        imageUrl="images/img-home.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <Item
        imageUrl="images/img-home.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <Item
        imageUrl="images/img-home.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
    </>
  );
}
