import styled from "styled-components";

import { Link } from "react-router-dom";

export const CastContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const Image = styled.img`
  width: 100px;
`;

export const CastLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    background: #e5e5ec;
  }
`;
