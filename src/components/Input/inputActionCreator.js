import {
  SEARCH_TV_SHOWS_SUCCESS,
  SEARCH_TV_SHOWS_FAILURE,
  START_SEARCH
} from "./inputActionTypes";

export const searchAllTvShows = searchTerm => {
  return async dispatch => {
    dispatch({ type: START_SEARCH });
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
