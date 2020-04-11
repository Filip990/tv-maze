import React from "react";

import { dateHelper } from "../../utils/helperFunctions";
import { StyledDetailsList } from "./DetailsList.styled";

const DetailsList = (props) => {
  return (
    <StyledDetailsList>
      {props.year && <li> Official Air Date: {props.year} </li>}
      {props.rating && <li> Rating: {props.rating} </li>}
      {props.runtime && <li> Runtime: {props.runtime} </li>}
      {props.status && <li> Status: {props.status} </li>}
      {props.language && <li> Language: {props.language} </li>}
      {props.network && (
        <li> Network: {props.network?.name || props.network} </li>
      )}
      {props.country && <li> Country: {props.country} </li>}
      {props.genres && <li> Genres: {props.genres} </li>}
      {props.premiereDate && (
        <li>Official Air Date: {dateHelper(props.premiereDate)}</li>
      )}
      {props.endDate && <li>Official End Date: {dateHelper(props.endDate)}</li>}
      {props.episodeOrder && <li>No. of Episodes: {props.episodeOrder}</li>}
      {props.network?.country?.name && (
        <li>Country: {props.network.country.name} </li>
      )}
    </StyledDetailsList>
  );
};

export default DetailsList;
