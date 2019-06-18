import React from "react";
import { Button, Submit } from "../Buttons/Button.js";
import Clouds from "./Clouds/Clouds";
import { Modal, OpenModal } from "../Modal/Modal";
import Sign from "./Signpost/Sign";
import * as S from "./Landing.style";

const Landing = props => {
  return (
    <S.Main>
      <Clouds />
      <h1>LSx</h1>
      <h2>Action Planner</h2>
      <S.ButtonContainer>
      <Submit link="#signpost"> Start Learning </Submit>
      <Button link="/action-plan"> Make Action Plan </Button>
      </S.ButtonContainer>
      <S.Nav id="signpost">
        <h1>Home</h1>
        <p> Follow the signs to learn more about different ways you can affect change in your community before you start your action plan</p>
        <OpenModal
          toggle={show => (
              <Sign visibility={show} />
          )}
          content={hide => (
            <Modal>
              <button onClick={hide}>X</button>
              <h2>
                About <a href="http://www.lsx.org.uk/">LSx</a>
              </h2>
              <p>
                London Sustainability Exchange is a “think and do” charity
                <br />
                which creates collaborations that address the complex barriers
                to
                <br />a sustainable London.
              </p>
              <br />
            </Modal>
          )}
        />
      </S.Nav>
    </S.Main>
  );
};

export default Landing;
