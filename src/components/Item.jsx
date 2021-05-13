import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="item-container">
      <div className="image-wrapper">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="text-wrapper">
        <article>
          <header>{props.header}</header>
          <p>{props.text}</p>
        </article>
      </div>
    </div>
  );
}

export default Item;
