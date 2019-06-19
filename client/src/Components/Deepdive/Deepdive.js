import React from "react";
import * as S from "./Deepdive.style";
import { Button } from "../Buttons/Button.js";
const Deepdive = ({ data }) => {
  const [scrollPosition, setScrollPosition] = React.useState(null);
  const [foregroundOpacity, setForegroundOpacity] = React.useState(1);

  window.onscroll = () => {
    setScrollPosition(window.scrollY);
    console.log("The scroll position: ", scrollPosition);
  };

  React.useEffect(
    () => {
      setForegroundOpacity(1 / (scrollPosition / 100));
    },
    [scrollPosition]
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
        <Button link="/#signpost">Back</Button>
      </S.Container>
      <S.ForegroundContainer style={{ opacity: foregroundOpacity }} />
      <S.InfoOne>
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
      <Button link="#top">Back to Top</Button>
    </S.Main>
  );
};

export default Deepdive;
