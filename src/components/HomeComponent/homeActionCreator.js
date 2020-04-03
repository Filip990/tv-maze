import {
  GET_ALL_TV_SHOWS_SUCCESS,
  GET_ALL_TV_SHOWS_FAILURE,
  START_TV_SHOW_FETCHING
} from "./homeActionTypes";

export const getAllTvShows = () => {
  return async dispatch => {
    dispatch({ type: START_TV_SHOW_FETCHING });
    try {
      const res = await fetch("http://api.tvmaze.com/shows");
      const tvShows = await res.json();
      dispatch({
        type: GET_ALL_TV_SHOWS_SUCCESS,
        tvShows
      });
    } catch (err) {
      dispatch({
        type: GET_ALL_TV_SHOWS_FAILURE,
        err
      });
    }
  };
};
