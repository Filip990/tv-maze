import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PersonDetails } from "./CastMember.styled";

import { dateHelper } from "../../../../../utils/helperFunctions";

const CastMember = (props) => {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getPersonDetails = async (id) => {
      try {
        const res = await fetch(`http://api.tvmaze.com/people/${id}`);
        const personDetails = await res.json();
        setPerson(personDetails);
      } catch (err) {
        setError(err.message);
      }
    };

    getPersonDetails(id);
  }, [id]);

  return (
    <PersonDetails>
      <img src={person.image?.medium} alt="" />
      <div>
        <h1>{person.name}</h1>
        {person.birthday && <p> Birthday: {dateHelper(person.birthday)}</p>}
        {person.country && <p> Country: {person.country.name}</p>}
      </div>
      {error && <div>{error}</div>}
    </PersonDetails>
  );
};

export default CastMember;
