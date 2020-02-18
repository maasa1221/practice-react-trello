import styled from "styled-components";



const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 12rem;
  border: solid 0.1rem black;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: lightgray;
  margin: 0 0.5rem;
`;

const StyledGrid1 = styled.div`
  display: grid;
  grid-row: 1/2;
`;

const StyledGrid2 = styled.div`
  display: grid;
  grid-row: 2/3;
`;

export default {
  StyledDiv,
  StyledGrid1,
  StyledGrid2
};
