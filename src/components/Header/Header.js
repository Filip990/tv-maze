import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import { StyledHeader, HeaderInput, Title, HeaderLink } from "./Header.styled";

import { searchAllTvShows } from "../../pages/Home/store/actionCreators/homeActionCreators";
import { useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [inputValue, setInputValue] = useState("");
  const inputEl = useRef(null);

  useEffect(() => inputEl.current.focus(), []); // focus input on initial render

  const delaySearchApiCall = debounce((val) => {
    dispatch(searchAllTvShows(val));
  }, 500);

  const handleSearch = (event) => {
    const { value } = event.target;
    setInputValue(value);
    delaySearchApiCall(value);
  };

  return (
    <StyledHeader>
      <div>
        <Title>TvMaze</Title>
        <HeaderLink exact to="/">
          Home
        </HeaderLink>
      </div>
      <HeaderInput
        type="search"
        onChange={handleSearch}
        placeholder="Search All TV Shows"
        disabled={pathname !== "/"}
        value={inputValue}
        elementRef={inputEl}
      />
    </StyledHeader>
  );
};

export default Header;
