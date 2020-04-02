import {
  GET_ALL_TV_SHOWS_SUCCESS,
  GET_ALL_TV_SHOWS_FAILURE
} from "./homeActionTypes";

const initialState = {
  tvShows: [],
  err: null
};

const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TV_SHOWS_SUCCESS:
      return { ...state, tvShows: action.tvShows, err: null };

    case GET_ALL_TV_SHOWS_FAILURE:
      return { ...state, tvShows: [], err: action.err };

    default:
      return state;
  }
};

export default tvShowsReducer;
