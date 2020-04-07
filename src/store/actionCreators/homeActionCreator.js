import {
  GET_ALL_TV_SHOWS_SUCCESS,
  GET_ALL_TV_SHOWS_FAILURE,
  GET_ALL_TV_SHOWS_REQUEST,
} from "../actions/homeActionTypes";

export const getAllTvShows = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_TV_SHOWS_REQUEST });
    try {
      const res = await fetch("http://api.tvmaze.com/shows");
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
