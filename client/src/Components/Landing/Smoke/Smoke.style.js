import styled, { keyframes } from 'styled-components';

const smokeL1 = keyframes`
0% { transform: scale(0.2) translate(0, 0) }
10% { opacity: 1; transform: scale(0.2) translate(0, -5px) }
100% { opacity: 0; transform: scale(1) translate(-20px, -130px) }
`;
const smokeR1 = keyframes`
0% { transform: scale(0.2) translate(0, 0) }
10% { opacity: 1; transform: scale(0.2) translate(0, -5px) }
100% { opacity: 0; transform: scale(1) translate(20px, -130px) }
`;
const smokeL2 = keyframes`
0% { transform: scale(0.2) translate(0, 0) }
10% { opacity: 1; transform: scale(0.2) translate(0, -5px) }
100% { opacity: 0; transform: scale(1) translate(-40px, -100px) }

`;
const smokeR2 = keyframes`
0% { transform: scale(0.2) translate(0, 0) }
10% { opacity: 1; transform: scale(0.2) translate(0, -5px) }
100% { opacity: 0; transform: scale(1) translate(40px, -100px) }
`;

const SmokeContainer = styled.div`
	position: absolute;
	z-index: 3;
	width: 1px;
	height: 160px;
	left: 50%;
	bottom: 7.3%;
`;

const SmokeBalls = styled.span`
	display: block;
	position: absolute;
	bottom: -35px;
	left: 50%;
	margin-left: -20px;
	height: 0px;
	width: 0px;
	border: 35px solid #4b4b4b;
	border-radius: 35px;
	left: -14px;
	opacity: 0;
	transform: scale(0.2);

	&.s0 {
		animation: ${smokeL1} 10s 0s infinite;
	}
	&.s1 {
		animation: ${smokeR1} 10s 0.5s infinite;
	}
	&.s2 {
		animation: ${smokeL2} 10s 1s infinite;
	}
	&.s3 {
		animation: ${smokeR2} 10s 1.5s infinite;
	}
	&.s4 {
		animation: ${smokeL1} 10s 2s infinite;
	}
	&.s5 {
		animation: ${smokeR1} 10s 2.5s infinite;
	}
	&.s6 {
		animation: ${smokeL2} 10s 3s infinite;
	}
	&.s7 {
		animation: ${smokeR2} 10s 3.5s infinite;
	}
	&.s8 {
		animation: ${smokeL1} 10s 4s infinite;
	}
	&.s9 {
		animation: ${smokeR1} 10s 4.5s infinite;
	}
	&.s10 {
		animation: ${smokeL2} 10s 5s infinite;
	}
	&.s11 {
		animation: ${smokeR2} 10s 5.5s infinite;
	}
	&.s12 {
		animation: ${smokeL1} 10s 6s infinite;
	}
	&.s13 {
		animation: ${smokeR1} 10s 6.5s infinite;
	}
	&.s14 {
		animation: ${smokeL2} 10s 7s infinite;
	}
	&.s15 {
		animation: ${smokeR2} 10s 7.5s infinite;
	}
	&.s16 {
		animation: ${smokeL1} 10s 8s infinite;
	}
	&.s17 {
		animation: ${smokeR1} 10s 8.5s infinite;
	}
	&.s18 {
		animation: ${smokeL2} 10s 9s infinite;
	}
	&.s19 {
		animation: ${smokeR2} 10s 9.5s infinite;
	}
`;

export { SmokeContainer, SmokeBalls };
