import styled from "styled-components";

const Main = styled.main`
  background-position: top center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Header = styled.header`
  width: 18.5em;
  margin: auto;
  padding: 0.75em;
`;

const Shelf = styled.div`
  margin: 2em auto;
  width: 12.5em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 5em);
  grid-row-gap: 2.5em;
`;

const Comic = styled.div`
  width: 55.962px;
  height: 79.115px;
  background: rgb(57, 125, 159);
  padding: 2px;
  border: 1px solid black;
  border-radius: 1px;
`;

const HeaderArticle = styled.header`
  display: grid;
  grid-template-rows: 0.5fr;
  border: 1px solid black;
  border-radius: 1px;
  background: white;
  color: black;
`;

const Issue = styled.p`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin-top: 0;
  margin-bottom: 0;
  align-self: center;
  font-family: "Londrina Solid", cursive;
  font-size: 1em;
`;

export { Main, Header, Comic, Shelf, HeaderArticle, Issue };
