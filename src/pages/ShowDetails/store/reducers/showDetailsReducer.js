import {
  SHOW_DETAILS_REQUEST_START,
  SHOW_DETAILS_REQUEST_SUCCESS,
  SHOW_DETAILS_REQUEST_FAILURE,
} from "../actions/ActionTypes";

import {
  formatDate,
  stripHtmlFromString,
} from "../../../../utils/helperFunctions";

import produce from "immer";

const initialState = {
  details: {
    name: "",
    year: "",
    language: "",
    genres: "",
    status: "",
    runtime: "",
    rating: "",
    network: "",
    country: "",
    image: "",
    summary: "",
    cast: [],
  },
  isFetching: false,
  error: null,
};

const showDetailsReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SHOW_DETAILS_REQUEST_START:
        draft.isFetching = true;
        break;

      case SHOW_DETAILS_REQUEST_SUCCESS:
        draft.details = {
          name: action.details.name,
          language: action.details.language,
          year: formatDate(action.details.premiered),
          genres: action.details.genres.join(", "),
          status: action.details.status,
          runtime: action.details?.runtime,
          rating: action.details.rating?.average,
          network: action.details.network?.name,
          country: action.details.network?.country?.name,
          image: action.details.image?.medium,
          summary: stripHtmlFromString(action.details.summary),
          cast: action.details._embedded?.cast,
        };
        draft.isFetching = false;
        break;

      case SHOW_DETAILS_REQUEST_FAILURE:
        draft.isFetching = false;
        draft.error = action.error;
        break;
      default:
        return state;
    }
  });
};

export default showDetailsReducer;
