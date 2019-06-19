import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  margin: auto;
  text-align: center;
  width: 320px;
  background-color: rgba(254, 203, 139, 0.5);
  padding: 12px 12px 0 12px;
`;

const Header = styled.header`
  padding: 0.5em;
  margin: 0.75em;
  background-color: #fef2e3;
  opacity: 0.8;
  border-radius: 5px;
`;

const SpeechBubbleContainer = styled.div`
  position: relative;
  margin: 0;
  text-align: center;
  width: 320px;
  height: 250px;
  overflow: hidden;
`;

const SpeechBubble = styled.p`
  position: relative;
  max-width: 18.5em;
  width: 296px;
  background-color: #fff;
  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1.5em; // offset should move with padding of parent
    border: 0.75rem solid transparent;
    border-top: none;
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;

const SpeechBubbleRight = styled.p`
  position: relative;
  max-width: 30em;
  width: 296px;
  background-color: #fff;
  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 12em; // offset should move with padding of parent
    border: 0.75rem solid transparent;
    border-top: none;
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;

const FlexWrapLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 296px;
`;

const FlexWrapRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 296px;
`;

const SocialsPrompt = styled.p`
  position: relative;
  border-radius: 20px;
  padding: 24px 12px 24px 12px;
  margin-top: 30px;
  font-family: "Lato", sans-serif;
  background-color:rgba(254,203,139,1); 

&:before {
  position: absolute;
  top: -17px;
  left: 30px;
  content: "#AirQuality";
  border-radius: 20px;
  font-size: 1.4em;
  font-family: 'Londrina Solid', cursive;
  padding: 5px;
  background-color:rgba(254,203,139,1); 
}
`

const speechBubbleScroll = keyframes`
  0% {
    
  }
  15%{
    transform:translateY(0)
  }
  20% {
    transform:translateY(-100%)
  }
  25% {
    transform:translateY(-100%)
  }
  40% {
    transform:translateY(-100%)
  }
  45% {
    transform:translateY(-200%)
  }
  60% {
    transform:translateY(-200%)
  }
  65% {
    transform:translateY(-300%)
  }
  90% {
    transform:translateY(-300%)
  }
  95% {
    transform:translateY(-400%)
  }
  100% {
    transform:translateY(-400%)
  }
`

const ChatBoundary = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  animation: ${speechBubbleScroll} 20s infinite;
`


export {
  Container,
  Header,
  SpeechBubble,
  SpeechBubbleRight,
  FlexWrapLeft,
  FlexWrapRight,
  SpeechBubbleContainer,
  ChatBoundary,
  SocialsPrompt
};
