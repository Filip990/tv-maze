import { SET_PAGINATION } from "./Actions";

export const changePaginationIndex = (index) => {
  return { type: SET_PAGINATION, index };
};
