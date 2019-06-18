import styled from 'styled-components';

const Button = styled.button`
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	background: none;
	cursor: pointer;
	padding: 1rem 2rem;
	display: inline-block;
	margin: 15px 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
    transition: all 0.3s;
    background: #cb4e4e;
    color: #fff;
    box-shadow: 0 6px #ab3c3c;
    -webkit-transition: none;
    -moz-transition: none;
    transition: none;
    border-radius: 20px;
}
`;

export {
    Button
}