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
  BalloonEmail,
  BalloonGov,
  BalloonTwitter
} from "./Balloons/Balloons";
import { Button } from "../Buttons/Button.js";

const Share = props => {
  return (
    <React.Fragment>
      <S.Container>
        <h2>Your community needs you</h2>
        <p class='social'>
          Reaching other groups fighting pollution is essential to reaching your
          objectives and bringing about change to your local community.
        </p>
        <S.SpeechBubbleContainer>
          <div className='up'>
            <S.FlexWrapLeft>
              <SharePerson1 />
            </S.FlexWrapLeft>
            <S.SpeechBubble>
              "I organised a <b> carpool</b> to cut emissions near my children's
              school."
            </S.SpeechBubble>
          </div>

          <div className='up'>
            <S.FlexWrapRight>
              <SharePerson2 />
            </S.FlexWrapRight>
            <S.SpeechBubbleRight>
              "I held a <b> science fair</b> for my year five students. We
              shared our findings with other schools."
            </S.SpeechBubbleRight>
          </div>

          <div className='up'>
            <S.FlexWrapLeft>
              <SharePerson3 />
            </S.FlexWrapLeft>
            <S.SpeechBubble>
              "I shared my results on my <b> twitter</b> and opened a dialogue
              with my <b> local MP</b>."
            </S.SpeechBubble>
          </div>

          <div className='up'>
            <S.FlexWrapRight>
              <SharePerson4 />
            </S.FlexWrapRight>
            <S.SpeechBubbleRight>
              "My scout group made a <b> facebook event</b> to lay hedges for
              the local park."
            </S.SpeechBubbleRight>
          </div>

          <div className='up'>
            <S.FlexWrapLeft>
              <SharePerson1 />
            </S.FlexWrapLeft>
            <S.SpeechBubble>
              "I organised a <b> carpool</b> to cut emissions near my children's
              school."
            </S.SpeechBubble>
          </div>
        </S.SpeechBubbleContainer>
        <BalloonFb />
        <BalloonEmail />
        <p class='socials'>
          Share your story via Facebook, email, Twitter, Petitions.gov
        </p>
        <BalloonTwitter />
        <BalloonGov />
        <Button link='/#signpost'>Back</Button>
      </S.Container>
    </React.Fragment>
  );
};

export default Share;
