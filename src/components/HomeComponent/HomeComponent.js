import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./TvShowCardComponent/TvShowCard";
import Spinner from "../Spinner/Spinner";
import Dropdown from "../Dropdown/Dropdown";

import "./HomeComponent.css";

import {
  getAllTvShows,
  setDropdownValue,
} from "../../store/actionCreators/homeActionCreator";

const dropdownOptions = [
  { value: "all shows", label: "All Shows" },
  { value: "drama", label: "Drama" },
  { value: "horror", label: "Horror" },
  { value: "comedy", label: "Comedy" },
  { value: "science-fiction", label: "Science-Fiction" },
  { value: "romance", label: "Romance" },
  { value: "thriller", label: "Thriller" },
  { value: "action", label: "Action" },
  { value: "crime", label: "Crime" },
  { value: "adventure", label: "Adventure" },
  { value: "mystery", label: "Mystery" },
];

const Home = () => {
  const dispatch = useDispatch();
  const { tvShows, filteredShows, isFetching, selected, error } = useSelector(
    (state) => state.allShows
  );

  const selectedOpt = selected;

  const showsToDisplay = useMemo(() => {
    const filtered = (!filteredShows.length ? tvShows : filteredShows).filter(
      (show) => {
        return selectedOpt !== "all shows"
          ? show.genres?.join(",").toLowerCase().indexOf(selectedOpt) > -1
          : show;
      }
    );

    return filtered;
  }, [tvShows, filteredShows, selectedOpt]);

  useEffect(() => {
    dispatch(getAllTvShows());
  }, [dispatch]);

  const changeSelectedGenre = (event) => {
    const { value } = event.target;
    dispatch(setDropdownValue(value));
  };

  return (
    <div>
      <Dropdown
        options={dropdownOptions}
        label={`Filter: ${selectedOpt}`}
        selected={selected}
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
