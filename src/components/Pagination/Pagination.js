import React, { useState } from "react";

import { StyledPagination, ActiveButton } from "./Pagination.styled";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(props.page);

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const previous = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(pageNumber);
  };

  const jumpToPage = (event) => {
    const { id } = event.target;
    jump(id);
  };

  return (
    <StyledPagination>
      {currentPage && currentPage !== 1 && (
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
      {currentPage && <ActiveButton>{currentPage}</ActiveButton>}
      <>
        <button id={currentPage + 1} onClick={props.onClick}>
          {currentPage + 1}
        </button>
        <button onClick={next}>next</button>
      </>
    </StyledPagination>
  );
};

export default Pagination;
