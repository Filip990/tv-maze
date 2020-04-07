import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./CastMember.css";

import { dateHelper } from "../../utils/helperFunctions";

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
    <div className="person-details-container">
      <img src={person.image?.medium} alt="" />
      <div>
        <h1>{person.name}</h1>
        {person.birthday && <p> Birthday: {dateHelper(person.birthday)}</p>}
        {person.country && <p> Country: {person.country.name}</p>}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default CastMember;
