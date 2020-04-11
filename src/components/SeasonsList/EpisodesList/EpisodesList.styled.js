import styled from "styled-components";

export const Episodes = styled.ul`
  list-style: none;
  padding: 0 1%;
`;

export const EpisodeListItem = styled.li`
  display: flex;

  &:nth-child(even) {
    background: #efeeee;
  }
`;

export const Summary = styled.p`
  margin: auto;
  width: 60%;
  border: 1px solid grey;
  padding: 2%;
  line-height: 1.5;
`;
