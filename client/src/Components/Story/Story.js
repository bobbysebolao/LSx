import React from 'react';
import * as S from './Story.style';

const Story = (props) => {
	return (
		<S.Wrapper>
			<S.Header>
				<S.TitleTop>SUSTAINABILITY</S.TitleTop>
				<S.TitleBottom>HEROES</S.TitleBottom>
				<S.Issue>ISSUE #1</S.Issue>
				<S.Date>4 JUNE</S.Date>
				<S.Subtitle>Citizen science success stories</S.Subtitle>
			</S.Header>
			<h2>Green Screening in Lewisham</h2>
			<section>
				<h3>Key Points</h3>
				<ul>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Lorem ipsum dolor sit amet</li>
				</ul>
			</section>
			<img width="100%" src="https://avatars2.githubusercontent.com/u/33389104?s=400&v=4" alt="description"/>
			<section>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</section>
		</S.Wrapper>
	);
};

export default Story;
