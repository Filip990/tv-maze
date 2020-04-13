// pay attention to naming
// create pages folder for each page (see routes), and in each page folder create
// a components folder, store, utils and constants relevant to that page
// create custom hook (put in utils folder)
// no need for wrapping divs, use fragments <></> instead
// remove return statements created from the snippet by default

import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./components/TvShowCardComponent/TvShowCard";
import Spinner from "../../components/Spinner/Spinner";
import Dropdown from "../../components/Dropdown/Dropdown";

import { MainContainer } from "./Home.styled";

import {
  getAllTvShows,
  setGenresFilter,
} from "./store/actionCreators/homeActionCreators";

const dropdownOptions = [
  // TODO: remove into separate file
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

  const showsToDisplay = useMemo(() => {
    const filtered = (!filteredShows.length ? tvShows : filteredShows).filter(
      (show) =>
        selected !== "all shows" // default
          ? show.genres?.join(",").toLowerCase().indexOf(selected) > -1
          : show
    );

    return filtered;
  }, [tvShows, filteredShows, selected]);

  useEffect(() => {
    if (!showsToDisplay.length) {
      dispatch(getAllTvShows());
    }
  }, [dispatch, showsToDisplay]);

  const changeSelectedGenre = (event) => {
    const { value } = event.target;
    dispatch(setGenresFilter(value));
    resetScrollPosition();
  };

  const resetScrollPosition = () => {
    if (window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Dropdown
        options={dropdownOptions}
        label={`Filter: ${selected}`}
        selected={selected}
        onChange={changeSelectedGenre}
      />
      <MainContainer>
        {isFetching ? (
          <Spinner />
        ) : (
          showsToDisplay.map((show) => <TvShowCard key={show.id} {...show} />)
        )}
        {error && <div> {error.message} </div>}
      </MainContainer>
    </>
  );
};

export default Home;
