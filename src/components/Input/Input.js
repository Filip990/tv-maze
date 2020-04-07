import React from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      disabled={props.disabled}
      ref={props.elementRef}
      onChange={props.onChange}
    />
  );
};

export default Input;
