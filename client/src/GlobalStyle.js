import { createGlobalStyle } from "styled-components";
import city from "./content/city-day-edited.svg";
import comicStore from "./content/comic-book-store-edited.svg"

const background = ({ data }) => {
    let backStr = "";

    if (data === "city") {
       backStr= `url(${city})`};
        
   if (data === "comic") {
        backStr= `url(${comicStore})`};
    return backStr;
}

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

@viewport {
    min-zoom: 50%;
}
    html {
        background: #6e6662;
        background-image: ${background};
       
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
