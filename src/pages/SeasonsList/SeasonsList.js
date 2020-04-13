import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { stripHtmlFromString } from "../../utils/helperFunctions";

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
  const [seasons, setSeasons] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSeasonsList = async (id) => {
      try {
        const res = await fetch(`http://api.tvmaze.com/shows/${id}/seasons`);
        const seasonsList = await res.json();
        setSeasons(seasonsList);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    getSeasonsList(id);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        seasons.map((season) => (
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
    </div>
  );
};

export default SeasonsList;
