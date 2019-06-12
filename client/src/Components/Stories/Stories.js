import React from 'react';
import * as S from './Stories.style';

const Stories = (props) => {
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
			<S.ComicOne />
			<S.ComicTwo	/>
      </S.Shelf>
		</S.Main>
	);
};

export default Stories;
