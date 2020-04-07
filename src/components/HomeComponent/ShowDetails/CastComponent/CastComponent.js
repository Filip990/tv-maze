import React from "react";

import "./CastComponent.css";
import { Link } from "react-router-dom";

const CastComponent = (props) => {
  const cast = Object.values(props);

  const uniqActors = Array.from(
    new Map(cast.map((actor) => [actor.person.id, actor])).values()
  );

  return (
    <div>
      <h3>Cast:</h3>
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
    </div>
  );
};

export default CastComponent;
