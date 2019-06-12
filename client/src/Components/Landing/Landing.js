import React from "react";
import Button from "../Buttons/Button.js";
import { Clouds } from "../../Components";
import { Modal, OpenModal } from "../Modal/Modal";
// import { ReactComponent as Sign } from '../../content/signpost-edited.svg';
import Sign from "./Signpost/Sign";
import * as S from "./Landing.style";

const Landing = props => {
  return (
    <S.Main>
      <Clouds />
      <h1>LSx</h1>
      <h2>Action Planner</h2>
      <Button> Start Learning </Button>
      <Button> Make Action Plan </Button>
      <S.Nav>
        <OpenModal
          toggle={show => (
            <React.Fragment>
              <Sign visibility={show} />
            </React.Fragment>
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
