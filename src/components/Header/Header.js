import React from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import "./Header.css";
import Input from "../Input/Input";

import { searchAllTvShows } from "../../store/actionCreators/searchActionCreator";

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
      <h1>TvMaze</h1>
      <Input onChange={search} placeholder="Search TV Shows" />
    </div>
  );
};

export default Header;
