import React, { useState } from "react";

import {
  DropdownContainer,
  DropdownButtonsContainer,
  ToggleDropdownButton,
  DropdownButton,
} from "./Dropdown.styled";

const Dropdown = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = (event) => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <DropdownContainer>
      <ToggleDropdownButton onClick={toggleDropdown}>
        {props.label}
      </ToggleDropdownButton>
      <DropdownButtonsContainer visible={visible} onClick={toggleDropdown}>
        {props.options.map((option) => (
          <DropdownButton
            key={option.value}
            value={option.value}
            onClick={props.onChange}
          >
            {option.label}
          </DropdownButton>
        ))}
      </DropdownButtonsContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
