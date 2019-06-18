import React from "react";
import * as S from "./Deepdive.style";
import { ReactComponent as ParkDetail } from "../../content/park-foreground.svg";
import { Button } from "../Buttons/Button.js";
const Deepdive = ({ data }) => {
  React.useEffect(() => {}, []);
  console.log(data);
  return (
    <S.Main>
      <h2>Dive deeper into the data</h2>
      <S.Container>
        <p>{data ? data[0]["intro"] : `Loading`}</p>
        <p>{data ? data[0]["middle"] : `Loading`}</p>
        <p>{data ? data[0]["end"] : `Loading`}</p>
        <Button link="/#signpost">Back</Button>
      </S.Container>
      <ParkDetail />
    </S.Main>
  );
};

export default Deepdive;
