import React from "react";
import { Link } from "react-router-dom";

import placeholderImg from "../../../assets/no_image.jpg";
import "./TvShowCard.css";

import {
  handleMissingData,
  genresHandler,
} from "../../../utils/helperFunctions";

const TvShowCard = (props) => {
  return (
    <Link to={`/show/${props.id}`} className="show-card">
      <div className="card-img-container">
        <img
          src={(props.image && props.image.medium) || placeholderImg}
          alt=""
        />
      </div>
      <h4>{props.name}</h4>
      <div className="short-details">
        <span>Rating: {props.rating.average || handleMissingData}</span>
        <span>{genresHandler(props.genres)}</span>
      </div>
    </Link>
  );
};

export default TvShowCard;
