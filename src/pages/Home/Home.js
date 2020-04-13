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
import { genresOptions } from "./constants/genresOptions";

const Home = () => {
  const dispatch = useDispatch();
  const { tvShows, filteredShows, isFetching, selected, error } = useSelector(
    (state) => state.allShows
  );

  const showsToDisplay = useMemo(() => {
    const filtered = (!filteredShows.length ? tvShows : filteredShows).filter(
      (show) =>
        selected !== genresOptions[0].value // default
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
        options={genresOptions}
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
