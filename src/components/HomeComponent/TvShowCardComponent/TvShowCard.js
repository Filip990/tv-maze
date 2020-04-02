import React from "react";

import "./TvShowCard.css";

const TvShowCard = props => {
  console.log(props);
  return (
    <div className="show-card">
      <img src={props.image.medium} alt="" />
      <h4>{props.name}</h4>
      <div className="short-details">
        <span>Rating: {props.rating.average || "NN"}</span>
        <span>{props.genres.join()}</span>
      </div>
    </div>
  );
};

export default TvShowCard;
