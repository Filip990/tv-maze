import {
  GET_ALL_TV_SHOWS_SUCCESS,
  GET_ALL_TV_SHOWS_FAILURE,
  GET_ALL_TV_SHOWS_REQUEST,
  SEARCH_TV_SHOWS_REQUEST,
  SEARCH_TV_SHOWS_SUCCESS,
  SEARCH_TV_SHOWS_FAILURE,
  SET_DROPDOWN_VALUE,
} from "../actions/ActionTypes";

export const getTvShows = (pageToFetch) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_TV_SHOWS_REQUEST });
    try {
      const res = await fetch(
        `http://api.tvmaze.com/shows?page=${pageToFetch}`
      );
      const tvShows = await res.json();
      dispatch({
        type: GET_ALL_TV_SHOWS_SUCCESS,
        tvShows,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_TV_SHOWS_FAILURE,
        error,
      });
    }
  };
};

export const searchAllTvShows = (searchTerm) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_TV_SHOWS_REQUEST });
    try {
      const res = await fetch(
        ` http://api.tvmaze.com/search/shows?q=${searchTerm}`
      );
      const tvShows = await res.json();
      dispatch({
        type: SEARCH_TV_SHOWS_SUCCESS,
        tvShows,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_TV_SHOWS_FAILURE,
        error,
      });
    }
  };
};

export const setGenresFilter = (value) => {
  return { type: SET_DROPDOWN_VALUE, value };
};
