import { createGlobalStyle } from "styled-components";
import city from './content/city-day-edited.svg';

const GlobalStyle = createGlobalStyle`
    html {
        background-image: url(${city});
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
    }

    body {
        height: 2000px;
    }
       
`;


export default GlobalStyle;
