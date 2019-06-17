import React from "react";
import * as S from "./Stories.style";

const Stories = ({ data }) => {
  // const [storiesData, setStoriesData] = React.useState(null);

  React.useEffect(
    () => {
      if (data) {
        console.log("Hello", data);
        // setStoriesData(Object.keys(data));
        // console.log("this is storiesdata", storiesData);
      }
    },
    [data]
  );

  return (
    <S.Main>
      <S.Header>
        <h2>Success Stories</h2>
        <p>
          Click on the comic books below to read about the everyday heroes doing
          their bit to promote clean air in their communities.
        </p>
      </S.Header>
      {/* Foreach row in the spreadsheet, generate new book, using the incrementer to make an id and give the x and y co-ordinate somehow*/}
      <S.Shelf>
        {data ? data.map((k, i) => <S.Comic key={k["Title"]} />) : null}
      </S.Shelf>
    </S.Main>
  );
};

export default Stories;
