import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { formatDate, stripHtmlFromString } from "../../utils/helperFunctions";
import placeholderImg from "../../assets/no_image.jpg";
import { Episodes, EpisodeListItem, Summary } from "./EpisodesList.styled";

import Spinner from "../../components/Spinner/Spinner";

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

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Episodes>
          {episodes.map((episode) => (
            <EpisodeListItem key={episode.id}>
              <div>
                <h3> {episode.name}</h3>
                <p>Official Air Date: {formatDate(episode.airdate)}</p>
                <p>Runtime: {episode.runtime} minutes</p>
                <img src={episode.image?.medium || placeholderImg} alt="" />
              </div>
              <Summary>
                {stripHtmlFromString(episode.summary) || "No summary provided"}
              </Summary>
            </EpisodeListItem>
          ))}
        </Episodes>
      )}
      {error && <span>{error}</span>}
    </>
  );
};

export default EpisodesList;
