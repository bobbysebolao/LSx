import styled, { keyframes } from "styled-components";

const Nav = styled.section`
  margin: auto;
  margin-top: 950px;
  width: 320px;
  overflow: hidden;
`;

const Main = styled.main`
  position: relative;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavDescription = styled.div`
  padding: 0.75em;
  margin: 0.75em;
  background-color: #fef2e3;
  opacity: 0.8;
  border-radius: 5px;
`;

const Link = styled.a`
  color: black;
}
`;

const Button = styled.button`
  margin-left: 200px;
  border: none;
  background-color: #cb4e4e;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  border-radius: 5px;
`;

const busDriving = keyframes`
0% { transform: translateX(0px) }
100% { transform: translateX(-9000px)}`;

const BusContainer = styled.div`
  position: absolute;
  width: 1300px;
  top: 1500px;
  left: 5500px;
  z-index: -1;
  animation: ${busDriving} 9s infinite;
  animation-timing-function: linear;
`;

const oldLadyWalking = keyframes`
0% { transform: translateX(0px) }
100% { transform: translateX(1500px)}`;

const OldladyContainer = styled.div`
  position: absolute;
  top: 1900px;
  left: -800px;
  right: 0;
  z-index: -2;
  animation: ${oldLadyWalking} 25s steps(25) infinite;
`;

export {
  Nav,
  Main,
  ButtonContainer,
  NavDescription,
  Link,
  Button,
  BusContainer,
  OldladyContainer
};
