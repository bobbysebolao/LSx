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
    background: #cb4e4e;
    color: #fff;
    box-shadow: 0 6px #ab3c3c;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 4px #ab3c3c;
        top: 2px;
    }
}
`;

const Submit = styled(Button)`
	background: #397d9f;
    box-shadow: 0 6px #28546a;
    &:hover {
        box-shadow: 0 4px #28546a;
`;

const ButtonLink = styled.a`
	width: auto;
	margin: auto;
`;

export { Button, Submit, ButtonLink };
