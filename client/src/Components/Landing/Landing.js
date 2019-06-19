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
        <S.NavDescription>
        <h2>Home</h2>
        <h3> Follow the signs to learn more about different ways you can affect change in your community before you start your action plan</h3>
        </S.NavDescription>
        <OpenModal
          toggle={show => (
              <Sign visibility={show} />
          )}
          content={hide => (
            <Modal>
              <S.Button onClick={hide}>X</S.Button>
              <h2>
                About LSx
              </h2>
              <p>
              <S.Link href="http://www.lsx.org.uk/">London Sustainability Exchange</S.Link> is a “think and do” charity
                which creates collaborations that address the complex barriers
                to a sustainable London.
              </p>
            </Modal>
          )}
        />
      </S.Nav>
    </S.Main>
  );
};

export default Landing;
