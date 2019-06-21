import { createGlobalStyle } from "styled-components";
import city from "./content/city-day-edited.svg";
import comicStore from "./content/comic-book-store-edited.svg";
import park from "./content/park-background.svg";
import school from "./content/school.svg";
import flats from "./content/flats.svg";
import postbox from "./content/postbox.svg";

const background = ({ data }) => {
  let backStr = "";

  switch (data) {
    case "city":
      backStr = `url(${city})`;
      break;

    case "comic":
      backStr = `url(${comicStore})`;
      break;

    case "park":
      backStr = `url(${park})`;
      break;

    case "flats":
      backStr = `url(${flats})`;
      break;

    case "school":
      backStr = `url(${school})`;
      break;

    case "postbox":
      backStr = `url(${postbox})`;
      break;

    default:
      backStr = "";
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
        overflow-x: hidden;
    }

    body {
        text-align: center;
        margin: 0;
        font-family: "Lato", sans-serif;
    }

    h1, h2, h3, h4, h5, h6, text {
      font-family: 'Londrina Solid', cursive;
      margin: 0;
    }

    h1 {
      font-size: 6rem;
    }

    h2 {
      font-size: 2.5rem;
			margin-bottom: 0.5em;
    }

    h3 {
      font-weight: 300;
			margin-bottom: 0.5em;
    }

    &.sign-surface-selector {
        fill: #2F6783;
        fill-opacity: 0;
        stroke: #ffffff;
        stroke-width: 0px;
    }

    &.sign-surface-selector:hover {
            fill: #2F6783;
            cursor: pointer;
            transition: all 0.25s ease;
            fill-opacity: 0;
            stroke: #ffffff;
            stroke-width: 2px;
            cursor: pointer;
          }
`;

export default GlobalStyle;
