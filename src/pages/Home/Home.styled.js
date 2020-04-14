import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0 2%;
`;

export const Pagination = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;
