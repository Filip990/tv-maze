import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./TvShowCardComponent/TvShowCard";
import "./HomeComponent.css";

import { getAllTvShows } from "./homeActionCreator";

const Home = props => {
  const dispatch = useDispatch();
  const showsList = useSelector(state => state.allShows);

  useEffect(() => {
    dispatch(getAllTvShows());
  }, [dispatch]);

  return (
    <div className="main-container">
      {showsList.tvShows.map(show => {
        return <TvShowCard key={show.id} {...show} />;
      })}
    </div>
  );
};

export default Home;
