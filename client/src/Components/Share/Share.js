import React from "react";
import * as S from "./Share.style";
import {
  SharePerson1,
  SharePerson2,
  SharePerson3,
  SharePerson4
} from "./SharePeople/SharePeople";

const Share = props => {
  return (
    <React.Fragment>
      <S.Container>
        <h1>Your community needs you</h1>
        <p>
          Reaching other groups fighting pollution is essential to reaching your
          objectives and bringing about change to your local community.
        </p>
        <SharePerson1 />
        <S.SpeechBubble>"Person_12"</S.SpeechBubble>
        <SharePerson2 />
        <S.SpeechBubble>"Person_12"</S.SpeechBubble>
        <SharePerson3 />
        <S.SpeechBubble>"Person_12"</S.SpeechBubble>
        <SharePerson4 />
        <S.SpeechBubble>"Person_12"</S.SpeechBubble>
      </S.Container>
    </React.Fragment>
  );
};

export default Share;
