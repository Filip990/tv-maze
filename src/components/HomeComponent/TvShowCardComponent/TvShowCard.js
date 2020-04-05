import React from "react";
import { Link } from "react-router-dom";

import placeholderImg from "../../../assets/no-image-available-grid.png";
import "./TvShowCard.css";

const TvShowCard = props => {
  return (
    <Link to={`/show/${props.id}`} className="show-card">
      <img src={(props.image && props.image.medium) || placeholderImg} alt="" />
      <h4>{props.name}</h4>
      <div className="short-details">
        <span>Rating: {props.rating.average || "NN"}</span>
        <span>{props.genres.join(", ")}</span>
      </div>
    </Link>
  );
};

export default TvShowCard;
