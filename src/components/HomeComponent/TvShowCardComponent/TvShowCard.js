import React from "react";

import "./TvShowCard.css";
import placeholderImg from "../../../assets/no-image-available-grid.png";

const TvShowCard = props => {
  return (
    <div className="show-card">
      <img src={(props.image && props.image.medium) || placeholderImg} alt="" />
      <h4>{props.name}</h4>
      <div className="short-details">
        <span>Rating: {props.rating.average || "NN"}</span>
        <span>{props.genres.join()}</span>
      </div>
    </div>
  );
};

export default TvShowCard;
