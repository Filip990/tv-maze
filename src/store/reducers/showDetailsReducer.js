import {
  SHOW_DETAILS_REQUEST_START,
  SHOW_DETAILS_REQUEST_SUCCESS,
  SHOW_DETAILS_REQUEST_FAILURE
} from "../actions/showDetailsActionTypes";

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
    cast: []
  },
  isFetching: false,
  err: null
};

const showDetailsReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SHOW_DETAILS_REQUEST_START:
        draft.isFetching = true;
        break;

      case SHOW_DETAILS_REQUEST_SUCCESS:
        draft.details = {
          name: action.details.name,
          language: action.details.language,
          year: action.details.premiered,
          genres: action.details.genres.join(", "),
          status: action.details.status,
          runtime: action.details.runtime,
          rating: action.details.rating.average,
          network: action.details.network.name,
          country: action.details.network.country.code,
          image: action.details.image.medium,
          summary: action.details.summary.replace(/<[^>]+>/g, ""), // strip HTML tags from the text
          cast: action.details._embedded.cast
        };
        draft.isFetching = false;
        break;

      case SHOW_DETAILS_REQUEST_FAILURE:
        draft.isFetching = false;
        draft.err = action.err;
        break;
      default:
        return state;
    }
  });
};

export default showDetailsReducer;
