import React from "react";
import * as S from "./Story.style";
import hyphenate from "../../utils/hyphenate.js";
import { Button } from "../Buttons/Button.js";

const Story = props => {
  const [storyData, setStoryData] = React.useState(null);

  const selectStory = airtableStories => {
    if (airtableStories.data !== null) {
      const correctStory = airtableStories.data.filter(story => {
        return (
          hyphenate(story["title"]).toLowerCase() ===
          airtableStories.match.params.story
        );
      });
      setStoryData(correctStory[0]);
    }
  };

  React.useEffect(
    () => {
      selectStory(props);
    },
    [props]
  );

  if (storyData) {
    console.log("storyData = ", storyData);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleTop>SUSTAINABILITY</S.TitleTop>
        <S.TitleBottom>HEROES</S.TitleBottom>
        <S.Issue>ISSUE #1</S.Issue>
        <S.Date>4 JUNE</S.Date>
        <S.Subtitle>Citizen science success stories</S.Subtitle>
      </S.Header>

      <h2>{storyData ? storyData["title"] : `Loading`}</h2>
      <section>
        <ul>
          <li>{storyData ? storyData["key-point-1"] : `Loading`}</li>
          <li>{storyData ? storyData["key-point-2"] : `Loading`}</li>
          <li>{storyData ? storyData["key-point-3"] : `Loading`}</li>
        </ul>
      </section>
      <img
        width="100%"
        src={storyData ? `${storyData["image"][0]["url"]}` : ``}
        alt="description"
      />
      <section>{storyData ? storyData["description"] : `Loading`}</section>
      <Button link="/success-stories">Back</Button>
    </S.Wrapper>
  );
};

export default Story;
