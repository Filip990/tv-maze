import styled from "styled-components";

export const DetailsList = styled.ul`
  list-style: none;
  border: 1px solid #cec8c8;
  text-align: center;
  line-height: 2;
  padding: 20px;
`;

export const Summary = styled.div`
  line-height: 1.6;
  width: 80%;
  margin: auto;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 4%;

  img {
    flex: 0.5, 0.5;
  }
`;
