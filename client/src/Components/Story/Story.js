import React from "react";
import * as S from "./Story.style";
import hyphenate from "../../utils/hyphenate.js";

const Story = props => {
  const [storyData, setStoryData] = React.useState(null);

  const selectStory = airtableStories => {
    if (airtableStories.data !== null) {
      airtableStories.data.map(story => {
        if (
          hyphenate(story["title"]).toLowerCase() ===
          airtableStories.match.params.story
        ) {
          setStoryData(story);
        }
      });
    }
  };

  React.useEffect(() => {
    selectStory(props);
  }, []);

  if (storyData) {
    console.log(storyData);
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
          <li>
            {storyData
              ? storyData["Key Points (each one on new line)"]
              : `Loading`}
          </li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </section>
      <img
        width="100%"
        src={
          storyData ? `${storyData["image"][0]["url"]}` : ``
        }
        alt="description"
      />
      <section>{storyData ? storyData["Description"] : `Loading`}</section>
    </S.Wrapper>
  );
};

export default Story;
