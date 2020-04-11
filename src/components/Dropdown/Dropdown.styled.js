import styled, { css } from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 25%;
  margin: auto;
`;

export const DropdownButton = styled.button`
  width: -webkit-fill-available;
`;

export const DropdownButtonsContainer = styled.div`
  ${(props) =>
    props.visible &&
    css`
      display: block;
      position: absolute;
      background: #f3f3f3;
    `}
  ${(props) =>
    props.visible === false &&
    css`
      display: none;
    `}
`;
