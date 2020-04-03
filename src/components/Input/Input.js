import React from "react";
import { useDispatch } from "react-redux";
import "./Input.css";

import { searchAllTvShows } from "./inputActionCreator";

const Input = props => {
  const dispatch = useDispatch();

  const search = event => {
    const { value } = event.target;
    dispatch(searchAllTvShows(value));
  };

  return <input onChange={search} placeholder={props.placeholder} />;
};

export default Input;
