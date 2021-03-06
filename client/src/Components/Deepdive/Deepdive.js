import React from "react";
import * as S from "./Deepdive.style";
import { Button } from "../Buttons/Button.js";
const Deepdive = ({ data }) => {
  const [scrollPosition, setScrollPosition] = React.useState(null);
  const [foregroundOpacity, setForegroundOpacity] = React.useState(1);

  window.onscroll = () => {
    setScrollPosition(window.scrollY);
  };

  React.useEffect(
    () => {
      setForegroundOpacity(1 / (scrollPosition / 100));
    },
    [scrollPosition]
  );
  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        className="heroicon-ui"
        fill="#fff"
        d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z"
      />
    </svg>
  );

  return (
    <S.Main>
      <S.Container id="top">
        <h2>Dive deeper into the data</h2>
        <h3>
          In March 2016, a YouGov poll found that London parents see toxic air
          as ‘the biggest health threat to their children’.
        </h3>
        <h3>
          But what exactly does the data reveal about the nature of this threat?
        </h3>
        <h3>Scroll down to find out.</h3>
        <Button style={{ fontSize: "25rem" }} link="#text">
          {downArrow}
        </Button>
      </S.Container>
      <S.ForegroundContainer style={{ opacity: foregroundOpacity }} />
      <S.InfoOne id="text">
        <h3>{data ? data[0]["heading1"] : `Loading`}</h3>
        <p>{data ? data[0]["intro"] : `Loading`}</p>
      </S.InfoOne>
      <S.InfoTwo>
        <h3>{data ? data[0]["heading2"] : `Loading`}</h3>
        <p>{data ? data[0]["middle"] : `Loading`}</p>
      </S.InfoTwo>
      <S.InfoThree>
        <h3>{data ? data[0]["heading3"] : `Loading`}</h3>
        <p>{data ? data[0]["end"] : `Loading`}</p>
      </S.InfoThree>
      <S.Resources>
        <h3>Resources</h3>
        <a
          href={data ? data[0]["link1"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-1"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link2"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-2"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link3"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-3"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link4"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-4"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link5"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-5"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link6"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-6"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link7"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-7"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link8"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-8"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link9"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-9"] : `Loading`}</p>
        </a>
        <a
          href={data ? data[0]["link10"] : `Loading`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data ? data[0]["anchor-text-10"] : `Loading`}</p>
        </a>
      </S.Resources>
      <S.ButtonContainer>
        <Button link="#top">Back to Top</Button>
        <Button link="/#signpost">Back</Button>
      </S.ButtonContainer>
    </S.Main>
  );
};

export default Deepdive;
