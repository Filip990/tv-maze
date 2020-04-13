import styled from "styled-components";

import { Link } from "react-router-dom";

export const TvShowLink = styled(Link)`
  border: 1px solid grey;
  padding: 4px;
  margin: 4px;
  text-decoration: none;
  color: black;

  &:hover {
    background: #e5e5ec;
  }
`;

export const ShowTitle = styled.h4`
  margin: 0;
`;

export const Image = styled.img`
  width: 150px;
  height: 210px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;
