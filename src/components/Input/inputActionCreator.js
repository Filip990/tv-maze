import {
  SEARCH_TV_SHOWS_SUCCESS,
  SEARCH_TV_SHOWS_FAILURE,
  SEARCH_TV_SHOWS_REQUEST
} from "./inputActionTypes";

export const searchAllTvShows = searchTerm => {
  return async dispatch => {
    dispatch({ type: SEARCH_TV_SHOWS_REQUEST });
    try {
      const res = await fetch(
        ` http://api.tvmaze.com/search/shows?q=${searchTerm}`
      );
      const tvShows = await res.json();
      dispatch({
        type: SEARCH_TV_SHOWS_SUCCESS,
        tvShows
      });
    } catch (err) {
      dispatch({
        type: SEARCH_TV_SHOWS_FAILURE,
        err
      });
    }
  };
};
