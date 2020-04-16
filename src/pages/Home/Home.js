import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import TvShowCard from "./components/TvShowCardComponent/TvShowCard";
import Spinner from "../../components/Spinner/Spinner";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";

import { MainContainer } from "./Home.styled";

import {
  getTvShows,
  setGenresFilter,
} from "./store/actionCreators/homeActionCreators";
import { genresOptions } from "./constants/genresOptions";
import { resetScrollPosition } from "../../utils/helperFunctions";

const Home = () => {
  const dispatch = useDispatch();
  const {
    tvShows, // populated initially
    filteredShows, // populated upon search
    isFetching,
    selected, // genres dropdown value
    currentPageIndex,
    itemsPerPage,
    numberOfApiCallsFired,
    error,
  } = useSelector((state) => state.allShows);

  const showsToDisplay = useMemo(() => {
    const filteredByGenre = (!filteredShows.length
      ? tvShows
      : filteredShows
    ).filter((show) =>
      selected !== genresOptions[0].value // if default 'all shows' is selected,
        ? // return every show, otherwise filter by selected genre
          show.genres?.join(",").toLowerCase().indexOf(selected) > -1
        : show
    );

    return filteredByGenre;
  }, [tvShows, filteredShows, selected]);

  // client-side pagination
  const paginateFrom = (currentPageIndex - 1) * itemsPerPage + 1;
  const paginateTo = paginateFrom + itemsPerPage - 1;
  const paginatedShows = showsToDisplay.slice(paginateFrom, paginateTo);

  useEffect(() => {
    const shouldLoadMoreShows =
      (currentPageIndex + 1) * itemsPerPage >= tvShows.length;

    if (shouldLoadMoreShows) {
      // numberOfApiCallsFired is incremented in a reducer, starting from 0 (ex. ?page=0, ?page=1 ...)
      // as way to determine which page from server should be fetched
      // because we cannot calculate that from the amount of already fetched data, since API
      // returns incosistent amount of data on every call
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
      <Pagination isVisible={showsToDisplay.length < itemsPerPage} />
      <MainContainer>
        {isFetching ? (
          <Spinner />
        ) : (
          paginatedShows.map((show) => <TvShowCard key={show.id} {...show} />)
        )}
        {error && <div> {error.message} </div>}
      </MainContainer>
    </>
  );
};

export default Home;
