import { useState } from "react";

import { resetScrollPosition } from "../utils/helperFunctions";

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    resetScrollPosition();
  };

  const previous = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    resetScrollPosition();
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    resetScrollPosition();
  };

  return { next, previous, jump, currentData, currentPage, maxPage };
};

export default usePagination;
