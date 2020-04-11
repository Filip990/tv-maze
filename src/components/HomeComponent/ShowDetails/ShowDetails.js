import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "../../Spinner/Spinner";
import CastComponent from "./CastComponent/CastComponent";

import { DetailsList, Summary, ListContainer } from "./ShowDetails.styled";
import placeholderImg from "../../../assets/no_image.jpg";

import { getShowDetails } from "../../../store/actionCreators/showDetailsActionCreators";
import { handleMissingData } from "../../../utils/helperFunctions";

const ShowDetails = (props) => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const { details, isFetching, error } = useSelector(
    (state) => state.showDetails
  );

  useEffect(() => {
    dispatch(getShowDetails(id));
  }, [dispatch, id]);

  return isFetching ? (
    <Spinner />
  ) : error ? (
    <div> {error.message} </div>
  ) : (
    <div>
      <h1>{details.name}</h1>
      <Link to={`/seasons/${id}`}>Show all seasons</Link>
      <ListContainer>
        <img src={details.image || placeholderImg} alt="" />

        <DetailsList>
          <li> Official Air Date: {details.year || handleMissingData} </li>
          <li> Rating: {details.rating || handleMissingData} </li>
          <li> Runtime: {details.runtime || handleMissingData} </li>
          <li> Status: {details.status || handleMissingData} </li>
          <li> Language: {details.language || handleMissingData} </li>
          <li> Network: {details.network || handleMissingData} </li>
          <li> Country: {details.country || handleMissingData} </li>
          <li> Genres: {details.genres || handleMissingData} </li>
        </DetailsList>
      </ListContainer>
      <Summary>{details.summary || "No summary provided"}</Summary>
      {details.cast.length !== 0 && <CastComponent {...details.cast} />}
    </div>
  );
};

export default ShowDetails;
