import React from 'react';
import * as S from './ExperimentSingle.style';
import hyphenate from '../../utils/hyphenate.js';
import { Button } from '../Buttons/Button.js';

const ExperimentSingle = (props) => {
	if (props.data) {
		console.log('this is the props passed in ', props.data);
	}

	const [experimentData, setExperimentData] = React.useState(null);

	const selectExperiment = (airtableStories) => {
		if (airtableStories.data !== null) {
			const correctExperiment = airtableStories.data.filter(
				(experiment) =>
					hyphenate(experiment['experiment-name']).toLowerCase() ===
					airtableStories.match.params.experiment
			);
			setExperimentData(correctExperiment[0]);
		}
	};

	React.useEffect(() => {
		selectExperiment(props);
	}, [props]);

	return (
		<S.Wrapper>
			<h2>{experimentData ? experimentData['experiment-name'] : `Loading`}</h2>
			<img
				width="100%"
				src={experimentData ? `${experimentData['image'][0]['url']}` : ``}
				alt={experimentData ? `${experimentData['alt-tag']}` : ``}
			/>
			<p>{experimentData ? experimentData['paragraph-1'] : `Loading`}</p>
			<p>{experimentData ? experimentData['paragraph-2'] : `Loading`}</p>
			<p>{experimentData ? experimentData['paragraph-3'] : `Loading`}</p>
			<p>{experimentData ? experimentData['paragraph-4'] : `Loading`}</p>
			<Button link="/experiments">Back</Button>
		</S.Wrapper>
	);
};

export default ExperimentSingle;
