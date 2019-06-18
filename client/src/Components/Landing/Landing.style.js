import styled from 'styled-components';

const Nav = styled.section`
	margin: auto;
	margin-top: 1200px;
	width: 320px;
`;

const Main = styled.main`
	width: 100%;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const NavDescription = styled.div`
	padding: 0.75em;
  margin: 0.75em;
  background-color: #fef2e3;
  opacity: 0.8;
`;

export { Nav, Main, ButtonContainer, NavDescription };
