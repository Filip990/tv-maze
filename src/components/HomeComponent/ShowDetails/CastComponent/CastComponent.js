import React from "react";

import "./CastComponent.css";

const CastComponent = (props) => {
  const cast = Object.values(props);

  const uniqActors = Array.from(
    new Map(cast.map((e) => [e.person.id, e])).values()
  );

  return (
    <div className="cast-container">
      {uniqActors.map((actor) => (
        <span key={actor.person.id}>
          <img src={actor.person.image.medium} alt="" />
          <p>{actor.person.name}</p>
        </span>
      ))}
    </div>
  );
};

export default CastComponent;
