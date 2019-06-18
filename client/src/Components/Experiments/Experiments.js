import React from "react";
import Button from "../Buttons/Button.js";
import * as S from "./Experiments.style";
import hyphenate from "../../utils/hyphenate.js";

const Experiments = ({ data }) => {
  // console.log("This is the experiment", data);
  return (
    <S.Main>
      <S.Header>
        <h2>Experiments</h2>
        <p>
          Air pollution is an invisible threat. An important part of creating
          change is making pollution ‘visible’. You can help by collecting your
          own data.
        </p>
      </S.Header>
      {/* Foreach row in the spreadsheet, generate new book, using the incrementer to make an id and give the x and y co-ordinate somehow*/}
      <S.Board>
        {data
          ? data.map((k, i) => (
            <a href={hyphenate(`/experiment/${k["experiment-name"]}`).toLowerCase()}key={i}>
              <S.Experiment>{k["experiment-name"]}</S.Experiment>
              </a>
            ))
          : null}
      </S.Board>
      <Button link="/#signpost">Back</Button>
    </S.Main>
  );
};

export default Experiments;
