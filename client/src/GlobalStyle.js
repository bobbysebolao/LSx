import { createGlobalStyle } from "styled-components";
import city from "./content/city-day-edited.svg";
import comicStore from "./content/comic-book-store-edited.svg";
import park from "./content/park-background.svg";
import school from "./content/school.svg";

const background = ({ data }) => {
  let backStr = "";

  if (data === "city") {
    backStr = `url(${city})`;
  }

  if (data === "comic") {
    backStr = `url(${comicStore})`;
  }

  if (data === "park") {
    backStr = `url(${park})`;
  }

  if (data === "school") {
    backStr = `url(${school})`;
  }
  return backStr;
};

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

    html {
        background: #6e6662;
        background-image: ${background};
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: top center;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        height: 1948px;
        font-family: "Lato", sans-serif;
    }

    h1, h2, h3, h4, h5, h6, text {
      font-family: 'Londrina Solid', cursive;
    }

    p, button {

    }

`;

export default GlobalStyle;
