import React from "react";
import { Button, Submit } from "../Buttons/Button.js";
import Clouds from "./Clouds/Clouds";
import Smoke from "./Smoke/Smoke";
import { ModalAction, Modal, OpenModal } from "../Modal/Modal";
import Sign from "./Signpost/Sign";
import { Bus } from "../Vehicles/Vehicles";
import Oldlady from "../Oldlady/Oldlady.js";
import * as S from "./Landing.style";
import QuestionMark from "./QuestionMark/QuestionMark";

const Landing = props => {
  return (
    <S.Main>
      <Clouds />
      <h1>LSx</h1>
      <h2>Action Planner</h2>
      <S.ButtonContainer>
        <Submit link="#signpost"> Start Learning </Submit>
        <Button link="/action-plan"> Make Action Plan </Button>
        <OpenModal
          toggle={show => <QuestionMark visibility={show} />}
          content={hide => (
            <ModalAction>
              <S.Button onClick={hide}>X</S.Button>
              <h3>
                <br />
                <b> How Can You Achieve Better Air Quality as a Community?</b>
              </h3>
              <p>
                <S.Link href="http://www.lsx.org.uk/" /> Once you have
                identified air pollution hotspots in your local area, you can
                start thinking about how you can help reduce air pollution
                emissions and exposure. There are several routes to take, which
                can be combined to increase your chances of success.
              </p>
            </ModalAction>
          )}
        />
      </S.ButtonContainer>
      <Smoke />
      <S.OldladyContainer>
        <Oldlady />
      </S.OldladyContainer>
      <S.BusContainer>
        <Bus />
      </S.BusContainer>
      <S.Nav id="signpost">
        <S.NavDescription>
          <h2>Home</h2>
          <h3>
            {" "}
            Follow the signs to learn more about different ways you can affect
            change in your community before you start your action plan
          </h3>
        </S.NavDescription>
        <OpenModal
          toggle={show => <Sign visibility={show} />}
          content={hide => (
            <Modal>
              <S.Button onClick={hide}>X</S.Button>
              <h2>About LSx</h2>
              <p>
                <S.Link href="http://www.lsx.org.uk/">
                  London Sustainability Exchange
                </S.Link>{" "}
                is a “think and do” charity which creates collaborations that
                address the complex barriers to a sustainable London.
              </p>
            </Modal>
          )}
        />
      </S.Nav>
    </S.Main>
  );
};

export default Landing;
