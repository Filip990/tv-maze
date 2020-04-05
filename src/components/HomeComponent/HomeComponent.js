import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./TvShowCardComponent/TvShowCard";
import Spinner from "../Spinner/Spinner";
import "./HomeComponent.css";

import { getAllTvShows } from "../../store/actionCreators/homeActionCreator";

const Home = () => {
  const dispatch = useDispatch();
  const { tvShows, filteredShows, isFetching } = useSelector(
    (state) => state.allShows
  );
  const showsToDisplay = !filteredShows.length ? tvShows : filteredShows;

  useEffect(() => {
    dispatch(getAllTvShows());
  }, [dispatch]);

  return (
    <div className="main-container">
      {isFetching ? (
        <Spinner />
      ) : (
        showsToDisplay.map((show) => <TvShowCard key={show.id} {...show} />)
      )}
    </div>
  );
};

export default React.memo(Home);
