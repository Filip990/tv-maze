import React from "react";
import { useParams, Link } from "react-router-dom";

import { stripHtmlFromString } from "../../utils/helperFunctions";
import useFetchRemoteData from "../../utils/useFetchRemoteData";

import placeholderImg from "../../assets/no_image.jpg";
import {
  SeasonsInfoWrapper,
  Summary,
  SeasonNumber,
} from "./SeasonsList.styled";

import Spinner from "../../components/Spinner/Spinner";
import DetailsList from "../../components/DetailsList/DetailsList";

const SeasonsList = () => {
  const { id } = useParams();

  const { response, error, isLoading } = useFetchRemoteData(
    `http://api.tvmaze.com/shows/${id}/seasons`
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        response &&
        response.map((season) => (
          <div key={season.id}>
            <SeasonNumber>Season: {season.number}</SeasonNumber>

            <SeasonsInfoWrapper>
              <img src={season.image?.medium || placeholderImg} alt="" />
              <Link to={`/episodes/${season.id}`}>See Episodes &#10148;</Link>
              <DetailsList {...season} />
            </SeasonsInfoWrapper>
            <Summary>
              {stripHtmlFromString(season.summary) || "No summary provided"}
            </Summary>
          </div>
        ))
      )}
      {error && <span>{error}</span>}
    </>
  );
};

export default SeasonsList;
