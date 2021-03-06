import styled from "styled-components";

const Main = styled.main`
  margin: auto;
  margin-top: 0px;
  width: 320px;
`;

const Header = styled.header`
  padding: 0.5em;
  margin: 0.75em;
  background-color: #fef2e3;
  opacity: 0.8;
  border-radius: 5px;
`;

const Board = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
`;

const Link = styled.a`
  font-family: 'Fredericka the Great', cursive;
  font-size: 1.4rem;
  padding: 0.2rem;
  margin: 0.2rem;
  border: 1px solid white;
  display: inline-block;
  text-decoration: none;
  color: white;
  border-radius: 5px;
}

&:visited {
  text-decoration: none;
}

&:hover {
  text-decoration: underline;

}

&:active {
  text-decoration: underline;
}
`;

export { Main, Header, Board, Link };
