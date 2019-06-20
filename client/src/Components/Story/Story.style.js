import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  text-align: center;
  width: 320px;
  border: 1px solid red;
  padding: 12px 12px 0 12px;
  background-color: #ffe4c3;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23397d9f' fill-opacity='0.09' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const Header = styled.header`
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  border: 3px solid black;
  background: white;
`;

const TitleTop = styled.h1`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  font-size: 2.25em;
  margin-bottom: 0;
`;

const TitleBottom = styled.h1`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: 0;
`;

const Issue = styled.p`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin-top: 0;
  margin-bottom: 0;
  align-self: center;
  font-family: "Londrina Solid", cursive;
`;

const Date = styled.p`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  margin-top: 0;
  margin-bottom: 0;
  align-self: center;
  font-family: "Londrina Solid", cursive;
`;

const Subtitle = styled.p`
  border-top: 3px solid black;
  box-sizing: content-box;
  padding-top: 3px;
  width: 100%;
  margin: 0 auto;
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  align-self: center;
  font-family: "Londrina Solid", cursive;
`;
const Image = styled.img`
  border: 3px solid black;
`;

export { Wrapper, Header, TitleTop, TitleBottom, Subtitle, Issue, Date, Image };
