import React from "react";
import Coding from "../../../assets/images/coding.jpg";
import "./CSS/CustomCard.css";

function CustomCard() {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={Coding} className="card-image" alt="Coding" />
        <div className="card-overlay">
          <div className="card-overlay-content">
            <h2>web development</h2>
            <h3>html css javascript</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus quaerat dolore corrupti excepturi molestias
              sit maxime repellat. Iste, illo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;

