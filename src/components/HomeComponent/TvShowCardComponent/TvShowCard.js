import React from "react";

import placeholderImg from "../../../assets/no_image.jpg";
import {
  TvShowLink,
  DetailsWrapper,
  ShowTitle,
  Image,
} from "./TvShowCardComponent.styled";

import {
  handleMissingData,
  genresHandler,
} from "../../../utils/helperFunctions";

const TvShowCard = (props) => {
  return (
    <TvShowLink to={`/show/${props.id}`} className="show-card">
      <Image src={props.image?.medium || placeholderImg} alt="" />
      <ShowTitle>{props.name}</ShowTitle>
      <DetailsWrapper>
        <span>Rating: {props.rating?.average || handleMissingData}</span>
        <span>{genresHandler(props.genres)}</span>
      </DetailsWrapper>
    </TvShowLink>
  );
};

export default TvShowCard;
