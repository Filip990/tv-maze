import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 10px;
  width: 25%;
  margin: 0 auto 2%;
`;

export const Button = styled.button`
  width: -webkit-fill-available;
  background: #2196f3;
  color: white;
  outline: none;

  &:hover {
    background: #6fb8f3;
    font-weight: 600;
  }
`;

export const ToggleButton = styled(Button)`
  background: #6fb8f3;
  border: none;
  font-size: inherit;
  font-weight: 600;
  padding: 1%;
  min-width: auto;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  background: #f3f3f3;
  display: ${(props) => (props.visible ? "block" : "none")};
`;
