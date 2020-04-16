import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./components/TvShowCardComponent/TvShowCard";
import Spinner from "../../components/Spinner/Spinner";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";

import { MainContainer } from "./Home.styled";

import {
  getTvShows,
  setGenresFilter,
} from "./store/actionCreators/ActionCreators";

import { genresOptions } from "./constants/genresOptions";
import { resetScrollPosition } from "../../utils/helperFunctions";

import { paginatedShows } from "./store/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const {
    tvShows, // populated initially
    isFetching,
    selected, // genres dropdown value
    currentPageIndex,
    itemsPerPage,
    numberOfApiCallsFired,
    error,
  } = useSelector((state) => state.allShows);

  const shows = useSelector(paginatedShows);

  useEffect(() => {
    const shouldLoadMoreShows =
      (currentPageIndex + 1) * itemsPerPage >= tvShows.length;

    if (shouldLoadMoreShows) {
      // numberOfApiCallsFired is incremented in a reducer, starting from 0 (ex. ?page=0, ?page=1 ...)
      // as a way to determine which page from the server should be fetched
      // because we cannot calculate that from the amount of already fetched data, since API
      // returns inconsistent amount of data on every call
      dispatch(getTvShows(numberOfApiCallsFired));
    }
  }, [
    dispatch,
    itemsPerPage,
    currentPageIndex,
    tvShows,
    numberOfApiCallsFired,
  ]);

  const changeSelectedGenre = (event) => {
    const { value } = event.target;
    dispatch(setGenresFilter(value));
    resetScrollPosition();
  };

  return (
    <>
      <Dropdown
        options={genresOptions}
        label={`Filter: ${selected}`}
        selected={selected}
        onChange={changeSelectedGenre}
      />
      <Pagination isVisible={shows.length < itemsPerPage} />
      <MainContainer>
        {isFetching ? (
          <Spinner />
        ) : (
          shows.map((show) => <TvShowCard key={show.id} {...show} />)
        )}
        {error && <div> {error.message} </div>}
      </MainContainer>
    </>
  );
};

export default Home;
