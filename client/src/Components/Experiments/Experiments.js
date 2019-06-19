import React from "react";
import { Button } from "../Buttons/Button.js";
import * as S from "./Experiments.style";
import hyphenate from "../../utils/hyphenate.js";

const Experiments = ({ data }) => {
  return (
    <S.Main>
      <S.Header>
        <h2>Experiments</h2>
        <h3>
          Air pollution is an invisible threat. An important part of creating
          change is making pollution ‘visible’. You can help by collecting your
          own data.
        </h3>
      </S.Header>
      <S.Board>
        {data
          ? data.map((k, i) => (
            <S.Link href={hyphenate(`/experiment/${k["experiment-name"]}`).toLowerCase()}key={i}>
              {k["experiment-name"]}
              </S.Link>
            ))
          : null}
      </S.Board>
      <Button link="/#signpost">Back</Button>
    </S.Main>
  );
};

export default Experiments;
