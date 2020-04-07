import React from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <input
      type="search"
      value={props.value}
      placeholder={props.placeholder}
      disabled={props.disabled}
      ref={props.elementRef}
      onChange={props.onChange}
    />
  );
};

export default Input;
