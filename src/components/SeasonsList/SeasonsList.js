import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SeasonsList.css";
import placeholderImg from "../../assets/no_image.jpg";
import { dateHelper, stripHtmlFromString } from "../../utils/helperFunctions";

import Spinner from "../Spinner/Spinner";

const SeasonsList = () => {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSeasonsList = async (id) => {
      try {
        const res = await fetch(`http://api.tvmaze.com/shows/${id}/seasons`);
        const seasonsList = await res.json();
        setSeasons(seasonsList);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getSeasonsList(id);
  }, [id]);

  return (
    <div className="seasons-container">
      {isLoading ? (
        <Spinner />
      ) : (
        seasons.map((season) => (
          <div key={season.id}>
            <h3>Season: {season.number}</h3>

            <div className="seasons-info-container">
              <img src={season.image?.medium || placeholderImg} alt="" />
              <ul>
                <li>Official Air Date: {dateHelper(season.premiereDate)}</li>
                <li>Official End Date: {dateHelper(season.endDate)}</li>
                <li>No. of Episodes: {season.episodeOrder}</li>
                <li>Network: {season.network?.name}</li>
                <li>Country: {season.network?.country?.name} </li>
              </ul>
            </div>
            <p className="summary">
              {stripHtmlFromString(season.summary) || "No summary provided"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default SeasonsList;
