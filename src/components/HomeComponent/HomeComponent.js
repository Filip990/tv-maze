import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./TvShowCardComponent/TvShowCard";
import Spinner from "../Spinner/Spinner";
import Dropdown from "../Dropdown/Dropdown";

import "./HomeComponent.css";

import { getAllTvShows } from "../../store/actionCreators/homeActionCreator";

const dropdownOptions = [
  { value: "all Shows", label: "All Shows" },
  { value: "drama", label: "Drama" },
  { value: "horror", label: "Horror" },
  { value: "comedy", label: "Comedy" },
  { value: "science-fiction", label: "Science-Fiction" },
  { value: "romance", label: "Romance" },
  { value: "thriller", label: "Thriller" },
];

const Home = () => {
  const dispatch = useDispatch();
  const { tvShows, filteredShows, isFetching, error } = useSelector(
    (state) => state.allShows
  );

  const [selectedOpt, setSelectedOpt] = useState(dropdownOptions[0].value);

  const showsToDisplay = useMemo(() => {
    const filtered = (!filteredShows.length ? tvShows : filteredShows).filter(
      (show) => {
        if (selectedOpt !== "all Shows") {
          return show.genres?.join(",").toLowerCase().indexOf(selectedOpt) > -1;
        }
        return show;
      }
    );

    return filtered;
  }, [tvShows, filteredShows, selectedOpt]);

  useEffect(() => {
    dispatch(getAllTvShows());
  }, [dispatch]);

  const changeSelectedGenre = (event) => {
    const { value } = event.target;
    setSelectedOpt(value);
  };

  return (
    <div>
      <Dropdown
        options={dropdownOptions}
        label={`Filter: ${selectedOpt}`}
        value={selectedOpt}
        onChange={changeSelectedGenre}
      />
      <div className="main-container">
        {isFetching ? (
          <Spinner />
        ) : (
          showsToDisplay.map((show) => <TvShowCard key={show.id} {...show} />)
        )}
        {error && <div> {error.message} </div>}
      </div>
    </div>
  );
};

export default Home;
