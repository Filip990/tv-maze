import React from "react";

import placeholderImg from "../../../../assets/no_image.jpg";
import { TvShowLink, Details, ShowTitle, Image } from "./TvShowCard.styled";

const TvShowCard = (props) => (
  <TvShowLink to={`/show/${props.id}`} className="show-card">
    <Image src={props.image?.medium || placeholderImg} alt="" />
    <ShowTitle>{props.name}</ShowTitle>
    <Details>
      <span>Rating: {props.rating?.average || "NN"}</span>
      <span>{props.genres.join(", ")}</span>
    </Details>
  </TvShowLink>
);

export default TvShowCard;
