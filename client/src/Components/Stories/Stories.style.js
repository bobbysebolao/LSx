import styled from "styled-components";
import store from "../../content/comic-book-store-edited.svg";

const Main = styled.main`
  background: #6e6662;
  background-image: url(${store});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Header = styled.header`
  width: 18.5em;
  margin: auto;
  padding: 0.75em;
`

const Shelf = styled.div`
  margin: 2em auto;
  width: 12.5em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 5em);
  grid-row-gap: 2.5em;
`

const ComicOne = styled.div`
  width: 55.962px;
  height: 79.115px;
  background: red;
  `

const ComicTwo = styled.div`
  width: 55.962px;
  height: 79.115px;
  background: blue;
`

export { Main, Header, ComicOne, ComicTwo, Shelf };
