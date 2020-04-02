import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTvShows } from "./homeActionCreator";

const Home = props => {
  const dispatch = useDispatch();
  const showsList = useSelector(state => state.allShows);

  useEffect(() => {
    dispatch(getAllTvShows());
  }, [dispatch]);

  console.log(showsList);

  return (
    <div>
      {showsList &&
        showsList.tvShows.map(show => {
          return <p>{show.name}</p>;
        })}
    </div>
  );
};

export default Home;
