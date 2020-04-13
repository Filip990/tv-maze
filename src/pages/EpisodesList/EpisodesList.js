import React from "react";
import { useParams } from "react-router-dom";

import { formatDate, stripHtmlFromString } from "../../utils/helperFunctions";
import placeholderImg from "../../assets/no_image.jpg";
import { Episodes, EpisodeListItem, Summary } from "./EpisodesList.styled";

import Spinner from "../../components/Spinner/Spinner";
import useFetchRemoteData from "../../utils/useFetchRemoteData";

const EpisodesList = () => {
  const { id } = useParams();

  const { response, error, isLoading } = useFetchRemoteData(
    `http://api.tvmaze.com/seasons/${id}/episodes`
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Episodes>
          {response &&
            response.map((episode) => (
              <EpisodeListItem key={episode.id}>
                <div>
                  <h3> {episode.name}</h3>
                  <p>Official Air Date: {formatDate(episode.airdate)}</p>
                  <p>Runtime: {episode.runtime} minutes</p>
                  <img src={episode.image?.medium || placeholderImg} alt="" />
                </div>
                <Summary>
                  {stripHtmlFromString(episode.summary) ||
                    "No summary provided"}
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
