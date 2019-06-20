import styled from "styled-components";
import foreground from "../../content/park-foreground.svg";

const Main = styled.main`
  position: relative;
  background-position: top center;
  padding: 0.75em;
  z-index: 0;
`;

const Container = styled.div`
  position: relative;
  width: 296px;
  padding: 0.75em;
  margin: auto;
  background-color: rgba(254, 242, 227, 0.8);
  z-index: 5;
`;

const ForegroundContainer = styled.div`
  background: url(${foreground});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: absolute;
  min-width: 296px;
  max-width: 1920px;
  height: 1071px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 4;
`;

const Info = styled.p`
  width: 296px;
  padding: 0.75em;
  margin: auto;
  height: 430px;
  background-color: rgba(254, 242, 227, 0.8);
`;

const InfoOne = styled(Info)`
  margin-top: 370px;
  z-index: 3;
`;

const InfoTwo = styled(Info)`
  margin-top: 80px;
  z-index: 2;
`;

const InfoThree = styled(Info)`
  margin-top: 80px;
  margin-bottom: 30px;
  z-index: 1;
`;

export { Main, Container, ForegroundContainer, InfoOne, InfoTwo, InfoThree };
