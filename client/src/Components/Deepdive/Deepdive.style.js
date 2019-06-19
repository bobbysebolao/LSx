import styled from "styled-components";
import foreground from "../../content/park-foreground.svg";

const Main = styled.main`
  position: relative;
  background-position: top center;
`;

const Container = styled.div`
  width: 40%;
  margin: auto;
`;

const ForegroundContainer = styled.div`
  background: url(${foreground});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: absolute;
  min-width: 320px;
  max-width: 1920px;
  height: 671px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export { Main, Container, ForegroundContainer };
