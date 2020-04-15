import React from "react";

import { StyledPagination, ActiveButton } from "./Pagination.styled";
import { useDispatch, useSelector } from "react-redux";
import { changePaginationIndex } from "../../pages/Home/store/actionCreators/homeActionCreators";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPageIndex } = useSelector((state) => state.allShows);

  const next = () => {
    const nextPage = currentPageIndex + 1;
    dispatch(changePaginationIndex(nextPage));
  };

  const previous = () => {
    const previousPage = currentPageIndex - 1;
    dispatch(changePaginationIndex(previousPage));
  };

  const jumpToPage = (event) => {
    const { id } = event.target;
    dispatch(changePaginationIndex(+id));
  };

  return (
    <StyledPagination>
      {currentPageIndex && currentPageIndex !== 1 && (
        <>
          <button id="1" onClick={jumpToPage}>
            first
          </button>
          <button onClick={previous}>previous</button>
          <button id={currentPageIndex - 1} onClick={jumpToPage}>
            {currentPageIndex - 1}
          </button>
        </>
      )}
      {currentPageIndex && <ActiveButton>{currentPageIndex}</ActiveButton>}
      <>
        <button id={currentPageIndex + 1} onClick={jumpToPage}>
          {currentPageIndex + 1}
        </button>
        <button onClick={next}>next</button>
      </>
    </StyledPagination>
  );
};

export default Pagination;
