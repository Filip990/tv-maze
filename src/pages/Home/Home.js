import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./components/TvShowCardComponent/TvShowCard";
import Spinner from "../../components/Spinner/Spinner";
import Dropdown from "../../components/Dropdown/Dropdown";

import { MainContainer, StyledPagination, ActiveButton } from "./Home.styled";

import {
  getAllTvShows,
  setGenresFilter,
  changePaginationIndex,
} from "./store/actionCreators/homeActionCreators";
import { genresOptions } from "./constants/genresOptions";
import { resetScrollPosition } from "../../utils/helperFunctions";
import usePagination from "../../utils/usePagination";

const Home = () => {
  const dispatch = useDispatch();
  const {
    tvShows,
    filteredShows,
    isFetching,
    selected,
    currentPageIndex,
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

  const {
    next,
    previous,
    jump,
    currentData,
    currentPage,
    maxPage,
  } = usePagination(showsToDisplay, 50, currentPageIndex);

  useEffect(() => {
    if (!showsToDisplay.length) {
      dispatch(getAllTvShows());
    }
  }, [dispatch, showsToDisplay]);

  const changeSelectedGenre = (event) => {
    const { value } = event.target;
    dispatch(setGenresFilter(value));
    resetScrollPosition();
    jump(1);
  };

  const jumpToPage = (event) => {
    const { id } = event.target;
    jump(id);
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
      <StyledPagination>
        {currentPage !== 1 && (
          <>
            <button id="1" onClick={jumpToPage}>
              first
            </button>
            <button onClick={previous}>previous</button>
            <button id={currentPage - 1} onClick={jumpToPage}>
              {currentPage - 1}
            </button>
          </>
        )}
        <ActiveButton>{currentPage}</ActiveButton>
        {currentPage !== maxPage && (
          <>
            <button id={currentPage + 1} onClick={jumpToPage}>
              {currentPage + 1}
            </button>
            <button onClick={next}>next</button>
          </>
        )}
      </StyledPagination>
      <MainContainer>
        {isFetching ? (
          <Spinner />
        ) : (
          currentData().map((show) => <TvShowCard key={show.id} {...show} />)
        )}
        {error && <div> {error.message} </div>}
      </MainContainer>
    </>
  );
};

export default Home;
