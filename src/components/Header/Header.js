import React from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import "./Header.css";
import Input from "../Input/Input";

import { searchAllTvShows } from "../../store/actionCreators/searchActionCreator";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const debouncedFn = debounce(val => {
    dispatch(searchAllTvShows(val));
  }, 300);

  const search = event => {
    const { value } = event.target;
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
      <Input onChange={search} placeholder="Search All TV Shows" />
    </div>
  );
};

export default Header;
