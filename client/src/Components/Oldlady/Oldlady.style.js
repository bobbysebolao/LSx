import styled, { keyframes } from "styled-components";
import img from "../../content/old-lady-walking.svg";

const play = keyframes`
  100% {
    background-position: -1075.36px;
  }
`;

const OldLady = styled.div`
  padding: 30px;
  position: absolute;
  left: 47%;
  right: 20%;
  bottom: 40%;
  width: 132.42px;
  height: 191.724px;
  background: url(${img}) left center;
  animation: ${play} 2s steps(8) infinite;
`;

export { OldLady };
