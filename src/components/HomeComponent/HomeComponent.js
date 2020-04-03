import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./TvShowCardComponent/TvShowCard";
import "./HomeComponent.css";

import { getAllTvShows } from "./homeActionCreator";

const Home = () => {
  const dispatch = useDispatch();
  const showsList = useSelector(state => state.allShows);
  const filteredShows = useSelector(state => state.allShows.filteredShows);
  const showsToDisplay = !filteredShows.length
    ? showsList.tvShows
    : filteredShows;

  useEffect(() => {
    dispatch(getAllTvShows());
  }, [dispatch]);

  return (
    <div className="main-container">
      {showsToDisplay.map(show => (
        <TvShowCard key={show.id} {...show} />
      ))}
    </div>
  );
};

export default React.memo(Home);
