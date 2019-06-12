import React from "react";
import Button from "../Buttons/Button.js";
import {ReactComponent as Sign}  from "../../content/signpost-edited.svg";
import * as S from "./Landing.style";


const Landing = props => {
  return (
    <S.Main>
      <h1>LSx</h1>
      <h2>Action Planner</h2>
      <Button> Start Learning </Button>
      <Button> Make Action Plan </Button>
      <S.Nav>
      <Sign />
      </S.Nav>
    </S.Main>
  );
};

export default Landing;
