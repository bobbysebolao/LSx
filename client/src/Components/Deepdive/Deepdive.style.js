import styled from "styled-components";
import foreground from "../../content/park-foreground.svg";

const Main = styled.main`
  position: relative;
  background-position: top center;
  padding: 0.75em;
`;

const Container = styled.div`
  width: 296px;
  padding: 0.75em;
  margin: auto;
  background-color: rgba(254, 242, 227, 0.8);
  border-radius: 5px;
`;

const ForegroundContainer = styled.div`
  background: url(${foreground});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: absolute;
  min-width: 296px;
  max-width: 1920px;
  height: 671px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
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
`;

const InfoTwo = styled(Info)`
  margin-top: 80px;
`;

const InfoThree = styled(Info)`
  margin-top: 80px;
  margin-bottom: 30px;
`;

export { Main, Container, ForegroundContainer, InfoOne, InfoTwo, InfoThree };
