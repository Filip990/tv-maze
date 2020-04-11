import styled from "styled-components";

import Input from "../Input/Input";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #363a4a;
  font-weight: 500;
  margin-bottom: 12px;
  text-align: initial;
  position: sticky;
  top: 0;
  background: #ffffff;
`;

export const HeaderInput = styled(Input)`
  width: 20em;
  margin: 4px 6px;
`;

export const Title = styled.h1`
  margin: 0;
  display: initial;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 2em;
  color: black;
  padding: 4px;
  border-radius: 30% 30% 0 0;

  :hover {
    color: white;
    background: black;
  }
  &.active {
    color: white;
    background: black;
  }
`;
