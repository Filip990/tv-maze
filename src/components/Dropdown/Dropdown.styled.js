import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 25%;
  margin: auto;
`;

export const DropdownButton = styled.button`
  width: -webkit-fill-available;
`;

export const DropdownButtonsContainer = styled.div`
  position: absolute;
  background: #f3f3f3;
  display: ${(props) => (props.visible ? "block" : "none")};
`;
