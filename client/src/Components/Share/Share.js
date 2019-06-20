import React from "react";
import * as S from "./Share.style";
import {
  SharePerson1,
  SharePerson2,
  SharePerson3,
  SharePerson4
} from "./SharePeople/SharePeople";
import {
  BalloonFb,
  BalloonInsta,
  BalloonGov,
  BalloonTwitter
} from "./Balloons/Balloons";
import { Button } from "../Buttons/Button.js";

const Share = props => {
  return (
    <React.Fragment>
      <S.Container>
        <S.Header>
        <h2>Your community needs you</h2>
        <h3>
          Reaching other groups fighting pollution is essential to reaching your
          objectives and bringing about change to your local community.
        </h3>
        </S.Header>
        <S.SpeechBubbleContainer>
          <S.ChatBoundary>
            <S.FlexWrapLeft>
              <SharePerson1 />
            </S.FlexWrapLeft>
            <S.SpeechBubble>
              "I organised a <b> carpool</b> to cut emissions near my children's
              school."
            </S.SpeechBubble>
          </S.ChatBoundary>

          <S.ChatBoundary>
            <S.FlexWrapRight>
              <SharePerson2 />
            </S.FlexWrapRight>
            <S.SpeechBubbleRight>
              "I held a <b> science fair</b> for my year five students. We
              shared our findings with other schools."
            </S.SpeechBubbleRight>
          </S.ChatBoundary>

          <S.ChatBoundary>
            <S.FlexWrapLeft>
              <SharePerson3 />
            </S.FlexWrapLeft>
            <S.SpeechBubble>
              "I shared my results on my <b> Twitter</b> and opened a dialogue
              with my <b> local MP</b>."
            </S.SpeechBubble>
          </S.ChatBoundary>

          <S.ChatBoundary>
            <S.FlexWrapRight>
              <SharePerson4 />
            </S.FlexWrapRight>
            <S.SpeechBubbleRight>
              "My scout group made a <b> Facebook event</b> to lay hedges for
              the local park."
            </S.SpeechBubbleRight>
          </S.ChatBoundary>

          <S.ChatBoundary>
            <S.FlexWrapLeft>
              <SharePerson1 />
            </S.FlexWrapLeft>
            <S.SpeechBubble>
              "I organised a <b> carpool</b> to cut emissions near my children's
              school."
            </S.SpeechBubble>
          </S.ChatBoundary>
        </S.SpeechBubbleContainer>
        <BalloonFb />
        <BalloonInsta />
        <S.SocialsPrompt>
          Share your story via Facebook, email, Twitter, Petitions.gov
        </S.SocialsPrompt>
        <BalloonTwitter />
        <BalloonGov />
        <Button link='/#signpost'>Back</Button>
      </S.Container>
    </React.Fragment>
  );
};

export default Share;
