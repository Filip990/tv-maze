import React from "react";

import "./Input.css";

const Input = props => {
  return <input onChange={props.onChange} placeholder={props.placeholder} />;
};

export default Input;
