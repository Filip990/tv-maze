import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  dateHelper,
  stripHtmlFromString,
} from "../../../utils/helperFunctions";
import placeholderImg from "../../../assets/no_image.jpg";

import Spinner from "../../Spinner/Spinner";

const EpisodesList = () => {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getEpisodesList = async (id) => {
      try {
        const res = await fetch(`http://api.tvmaze.com/seasons/${id}/episodes`);
        const episodesList = await res.json();
        setEpisodes(episodesList);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    getEpisodesList(id);
  }, [id]);
  console.log(episodes);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <h3>Name: {episode.name}</h3>
              <p>Official Air Date: {dateHelper(episode.airdate)}</p>
              <p>Runtime: {episode.runtime}</p>
              <img src={episode.image?.medium || placeholderImg} alt="" />
              <p>
                {stripHtmlFromString(episode.summary) || "No summary provided"}
              </p>
            </li>
          ))}
        </ul>
      )}
      {error && <span>{error}</span>}
    </div>
  );
};

export default EpisodesList;
