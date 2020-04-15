import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./components/TvShowCardComponent/TvShowCard";
import Spinner from "../../components/Spinner/Spinner";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";

import { MainContainer } from "./Home.styled";

import {
  getAllTvShows,
  setGenresFilter,
  changePaginationIndex,
} from "./store/actionCreators/homeActionCreators";
import { genresOptions } from "./constants/genresOptions";
import { resetScrollPosition } from "../../utils/helperFunctions";

const Home = () => {
  const dispatch = useDispatch();
  const {
    tvShows,
    filteredShows,
    isFetching,
    selected,
    currentPageIndex,
    itemsPerPage,
    error,
  } = useSelector((state) => state.allShows);

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
    dispatch(getAllTvShows(currentPageIndex));
  }, [dispatch, currentPageIndex]);

  const changeSelectedGenre = (event) => {
    const { value } = event.target;
    dispatch(setGenresFilter(value));
    resetScrollPosition();
  };

  const jumpToPage = (event) => {
    const { id } = event.target;
    dispatch(changePaginationIndex(+id));
  };

  return (
    <>
      <Dropdown
        options={genresOptions}
        label={`Filter: ${selected}`}
        selected={selected}
        onChange={changeSelectedGenre}
      />
      <Pagination
        data={showsToDisplay}
        items={itemsPerPage}
        page={currentPageIndex}
        onClick={jumpToPage}
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
