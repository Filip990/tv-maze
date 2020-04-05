import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../Spinner/Spinner";
import "./ShowDetails.css";

import { getShowDetails } from "../../../store/actionCreators/showDetailsActionCreators";

const ShowDetails = props => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const { details, isFetching } = useSelector(state => state.showDetails);

  useEffect(() => {
    dispatch(getShowDetails(id));
  }, [dispatch, id]);

  return isFetching ? (
    <Spinner />
  ) : (
    <div className="details-container">
      <h1>{details.name}</h1>
      <div className="img-container">
        <img src={details.image} alt="" />

        <ul>
          <li> Rating: {details.rating} </li>
          <li> Runtime: {details.runtime}</li>
          <li> Status: {details.status} </li>
          <li>Language: {details.language} </li>
          <li> Network: {details.network}</li>
          <li> Country: {details.country}</li>
          <li> Genres: {details.genres}</li>
        </ul>
      </div>
      <div className="summary">{details.summary}</div>
    </div>
  );
};

export default ShowDetails;
