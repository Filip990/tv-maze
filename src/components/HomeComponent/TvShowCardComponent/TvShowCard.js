import React from "react";

const TvShowCard = props => {
  console.log(props);
  return (
    <div>
      <h4>{props.name}</h4>
      <img src={props.image.medium} alt="" />
    </div>
  );
};

export default TvShowCard;
