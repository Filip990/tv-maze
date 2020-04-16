import { SET_PAGINATION } from "./ActionTypes";

export const changePaginationIndex = (index) => {
  return { type: SET_PAGINATION, index };
};
