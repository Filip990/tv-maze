import React from "react";
import { useParams } from "react-router-dom";

import { PersonDetails } from "./CastMember.styled";

import Spinner from "../../components/Spinner/Spinner";

import { formatDate } from "../../utils/helperFunctions";
import useFetchRemoteData from "../../utils/useFetchRemoteData";

const CastMember = () => {
  const { id } = useParams();

  const { response, error, isLoading } = useFetchRemoteData(
    `http://api.tvmaze.com/people/${id}`
  );

  return isLoading ? (
    <Spinner />
  ) : (
    response && (
      <PersonDetails>
        <img src={response.image?.medium} alt="" />
        <div>
          <h1>{response.name}</h1>
          {response.birthday && (
            <p> Birthday: {formatDate(response.birthday)}</p>
          )}
          {response.country && <p> Country: {response.country.name}</p>}
        </div>
        {error && <div>{error}</div>}
      </PersonDetails>
    )
  );
};

export default CastMember;
