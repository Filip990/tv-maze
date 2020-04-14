import React from "react";

import { StyledPagination, ActiveButton } from "./Pagination.styled";
import usePagination from "../../utils/usePagination";

const Pagination = (props) => {
  const {
    next,
    previous,
    jump,
    currentData,
    currentPage,
    maxPage,
  } = usePagination(props.data, 50);

  const jumpToPage = (event) => {
    const { id } = event.target;
    jump(id);
  };

  return (
    <StyledPagination>
      {currentPage !== 1 && (
        <>
          <button id="1" onClick={jumpToPage}>
            first
          </button>
          <button onClick={previous}>previous</button>
          <button id={currentPage - 1} onClick={jumpToPage}>
            {currentPage - 1}
          </button>
        </>
      )}
      <ActiveButton>{currentPage}</ActiveButton>
      <button id={currentPage + 1} onClick={jumpToPage}>
        {currentPage + 1}
      </button>
      <button onClick={next}>next</button>
      <button id={maxPage} onClick={jumpToPage}>
        last
      </button>
    </StyledPagination>
  );
};

export default Pagination;
