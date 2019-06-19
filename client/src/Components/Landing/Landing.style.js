import styled from 'styled-components';

const Nav = styled.section`
	margin: auto;
	margin-top: 950px;
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

const Link = styled.a`
  color: black;
}
`;

const Button = styled.button`
	margin-left: 200px;
	border: none;
	background-color: #cb4e4e;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	cursor: pointer;
	padding: 0.5rem 0.7rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
    border-radius: 5px;
`;

export { Nav, Main, ButtonContainer, NavDescription, Link, Button };
