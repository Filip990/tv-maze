import {
  GET_ALL_TV_SHOWS_SUCCESS,
  GET_ALL_TV_SHOWS_FAILURE,
  START_TV_SHOW_FETCHING
} from "./homeActionTypes";
import {
  SEARCH_TV_SHOWS_SUCCESS,
  SEARCH_TV_SHOWS_FAILURE,
  START_SEARCH
} from "../Input/inputActionTypes";

import produce from "immer";

const initialState = {
  tvShows: [],
  filteredShows: [],
  isFetching: false,
  err: null
};

const tvShowsReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case START_TV_SHOW_FETCHING:
        draft.isFetching = true;
        break;
      case GET_ALL_TV_SHOWS_SUCCESS:
        draft.tvShows = action.tvShows;
        draft.isFetching = false;
        draft.err = null;
        break;
      case GET_ALL_TV_SHOWS_FAILURE:
        draft.tvShows = [];
        draft.isFetching = false;
        draft.err = action.err;
        break;
      case START_SEARCH:
        draft.isFetching = true;
        break;
      case SEARCH_TV_SHOWS_SUCCESS:
        draft.filteredShows = action.tvShows.map(item => item.show);
        draft.isFetching = false;
        draft.err = null;
        break;
      case SEARCH_TV_SHOWS_FAILURE:
        draft.filteredShows = [];
        draft.isFetching = false;
        draft.err = action.err;
        break;
      default:
        return state;
    }
  });
};

export default tvShowsReducer;
