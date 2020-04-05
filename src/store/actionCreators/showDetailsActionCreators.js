import {
  SHOW_DETAILS_REQUEST_START,
  SHOW_DETAILS_REQUEST_SUCCESS,
  SHOW_DETAILS_REQUEST_FAILURE
} from "../actions/showDetailsActionTypes";

export const getShowDetails = id => {
  return async dispatch => {
    dispatch({ type: SHOW_DETAILS_REQUEST_START });
    try {
      const res = await fetch(` http://api.tvmaze.com/shows/${id}?embed=cast`);
      const details = await res.json();
      dispatch({
        type: SHOW_DETAILS_REQUEST_SUCCESS,
        details
      });
    } catch (err) {
      dispatch({
        type: SHOW_DETAILS_REQUEST_FAILURE,
        err
      });
    }
  };
};
