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
              "After conducting my experiment, I shared my findings online and
              was retweeted by my local <b> MP</b>."
            </S.SpeechBubble>
          </div>

          <div className='up'>
            <S.FlexWrapRight>
              <SharePerson4 />
            </S.FlexWrapRight>
            <S.SpeechBubbleRight>
              "My scout group made a facebook event to <b> lay hedges</b> for
              the local park."
            </S.SpeechBubbleRight>
          </div>

          <div className='up'>
            <S.FlexWrapLeft>
              <SharePerson1 />
            </S.FlexWrapLeft>
            <S.SpeechBubble>
              "I organised a carpool to cut emissions near my children's
              school."
            </S.SpeechBubble>
          </div>
        </S.SpeechBubbleContainer>
      </S.Container>
    </React.Fragment>
  );
};

export default Share;
