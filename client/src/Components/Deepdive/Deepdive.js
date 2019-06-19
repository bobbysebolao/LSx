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
      <h2>Dive deeper into the data</h2>
      <S.Container>
        <p>{data ? data[0]["intro"] : `Loading`}</p>
        <p>{data ? data[0]["middle"] : `Loading`}</p>
        <p>{data ? data[0]["end"] : `Loading`}</p>
        <Button link="/#signpost">Back</Button>
      </S.Container>
      <S.ForegroundContainer style={{ opacity: foregroundOpacity }} />
    </S.Main>
  );
};

export default Deepdive;
