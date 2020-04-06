import React from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      placeholder={props.placeholder}
      disabled={props.disabled}
      ref={props.elementRef}
    />
  );
};

export default Input;
