import styled from 'styled-components';

const Main = styled.main`
	background-position: top center;
	width: 100vw;
	height: 100vh;
	position: relative;
`;

const Header = styled.header`
	width: 18.5em;
	margin: auto;
	padding: 0.75em;
`;

const Shelf = styled.div`
	margin: 2em auto;
	width: 12.5em;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 5em);
	grid-row-gap: 2.5em;
`;

const Comic = styled.div`
	width: 55.962px;
	height: 79.115px;
	background: red;
`;

export { Main, Header, Comic, Shelf };
