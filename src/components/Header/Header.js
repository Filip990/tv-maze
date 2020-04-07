import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import "./Header.css";
import Input from "../Input/Input";

import { searchAllTvShows } from "../../store/actionCreators/searchActionCreator";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const disabled = pathname !== "/";
  const [inputValue, setInputValue] = useState("");
  const inputEl = useRef(null);

  useEffect(() => inputEl.current.focus(), []);

  const debouncedFn = debounce((val) => {
    dispatch(searchAllTvShows(val));
  }, 300);

  const search = (event) => {
    const { value } = event.target;
    setInputValue(value);
    debouncedFn(value);
  };

  return (
    <div className="header">
      <div>
        <h1>TvMaze</h1>
        <NavLink exact to="/" activeClassName="nav-active">
          Home
        </NavLink>
      </div>
      <Input
        onChange={search}
        placeholder="Search All TV Shows"
        disabled={disabled}
        value={inputValue}
        elementRef={inputEl}
      />
    </div>
  );
};

export default Header;
