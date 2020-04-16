import { createSelector } from "reselect";
import { genresOptions } from "../constants/genresOptions";

const tvShows = (state) => state.allShows.tvShows;
const filteredShows = (state) => state.allShows.filteredShows;
const selected = (state) => state.allShows.selected;
const currentPageIndex = (state) => state.allShows.currentPageIndex;
const itemsPerPage = (state) => state.allShows.itemsPerPage;

const showsToDisplay = createSelector(
  [tvShows, filteredShows, selected],
  (tvShows, filteredShows, selected) => {
    const filtered = (!filteredShows.length
      ? tvShows
      : filteredShows
    ).filter((show) =>
      selected !== genresOptions[0].value
        ? show.genres?.join(",").toLowerCase().indexOf(selected) > -1
        : show
    );
    return filtered;
  }
);

export const paginatedShows = createSelector(
  [currentPageIndex, itemsPerPage, showsToDisplay],
  (currentPageIndex, itemsPerPage, showsToDisplay) => {
    const paginateFrom = (currentPageIndex - 1) * itemsPerPage + 1;
    const paginateTo = paginateFrom + itemsPerPage;
    return showsToDisplay.slice(paginateFrom, paginateTo);
  }
);
