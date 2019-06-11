import { createGlobalStyle } from "styled-components";
import city from "./content/city-day-edited.svg";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

@viewport {
    min-zoom: 50%;
}
    html {
        background: #6e6662;
        background-image: url(${city});
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
    }

    body {
        margin: 0;
        height: 2000px;
    }

`;

export default GlobalStyle;
