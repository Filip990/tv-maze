import React from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import "./Input.css";
import { searchAllTvShows } from "./inputActionCreator";

const Input = props => {
  const dispatch = useDispatch();

  const debouncedFn = debounce(value => {
    dispatch(searchAllTvShows(value));
  }, 300);

  const search = event => {
    const { value } = event.target;
    debouncedFn(value);
  };

  return <input onChange={search} placeholder={props.placeholder} />;
};

export default Input;
