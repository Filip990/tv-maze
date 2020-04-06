import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../Spinner/Spinner";
import CastComponent from "./CastComponent/CastComponent";

import "./ShowDetails.css";
import placeholderImg from "../../../assets/no_image.jpg";

import { getShowDetails } from "../../../store/actionCreators/showDetailsActionCreators";

const ShowDetails = (props) => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const { details, isFetching } = useSelector((state) => state.showDetails);
  const unknown = "NN";

  useEffect(() => {
    dispatch(getShowDetails(id));
  }, [dispatch, id]);

  return isFetching ? (
    <Spinner />
  ) : (
    <div className="details-container">
      <h1>{details.name}</h1>
      <div className="img-container">
        <img src={details.image || placeholderImg} alt="" />

        <ul>
          <li> Year: {details.year || unknown} </li>
          <li> Rating: {details.rating || unknown} </li>
          <li> Runtime: {details.runtime || unknown} </li>
          <li> Status: {details.status || unknown} </li>
          <li> Language: {details.language || unknown} </li>
          <li> Network: {details.network || unknown} </li>
          <li> Country: {details.country || unknown} </li>
          <li> Genres: {details.genres || unknown} </li>
        </ul>
      </div>
      <div className="summary">{details.summary || "No summary provided"}</div>
      <h3>Cast:</h3>
      <CastComponent {...details.cast} />
    </div>
  );
};

export default ShowDetails;
