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

`;

const Header = styled.header`
  width: 18.5em;
  margin: auto;
  padding: 0.75em;
`

export { Main, Header };
