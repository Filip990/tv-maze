import React from "react";

import "./CastComponent.css";
import { Link } from "react-router-dom";

const CastComponent = (props) => {
  const cast = Object.values(props);

  const uniqActors = Array.from(
    new Map(cast.map((e) => [e.person.id, e])).values()
  );

  return (
    <div className="cast-container">
      {uniqActors.map((actor) => (
        <Link to={`/person/${actor.person.id}`} key={actor.person.id}>
          <img src={actor.person.image?.medium} alt="" />
          <p>
            {actor.person.name} as {actor.character.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CastComponent;
