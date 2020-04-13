import React from "react";

import { StyledInput } from "./Input.styled";

const Input = (props) => (
  <StyledInput
    className={props.className}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    disabled={props.disabled}
    ref={props.elementRef}
    onChange={props.onChange}
  />
);

export default Input;
