import React, { useState } from "react";

import {
  Container,
  ButtonsContainer,
  ToggleButton,
  Button,
} from "./Dropdown.styled";

const Dropdown = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = (event) => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <Container>
      <ToggleButton onClick={toggleDropdown}>{props.label}</ToggleButton>
      <ButtonsContainer visible={visible} onClick={toggleDropdown}>
        {props.options.map((option) => (
          <Button
            key={option.value}
            value={option.value}
            onClick={props.onChange}
          >
            {option.label}
          </Button>
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default Dropdown;
