import React from 'react';
import * as S from './Stories.style';

const Stories = ({ data }) => {
const [storiesData, setStoriesData ] = React.useState(null);
	// const renderData = data => {
	// 	data.map(story => {
	// 		return <S.Comic />
	// })
	// }
	React.useEffect(() => {
		if (data) {
			console.log('Hello', data);	
			setStoriesData(Object.keys(data));	
			console.log("this is storiesdata", storiesData);		
	}
	}, [data]);

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
				{ storiesData ? storiesData.map(k=> <S.Comic key={k}></S.Comic>) : console.log("nope")}
				{/* <S.Comic style={{backgroundColor:'blue'}} />
        <S.Comic /> */}
			</S.Shelf>
		</S.Main>
	);
};

export default Stories;
