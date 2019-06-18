import { createGlobalStyle } from "styled-components";
import city from "./content/city-day-edited.svg";
import comicStore from "./content/comic-book-store-edited.svg";
import park from "./content/park-background.svg";
import school from "./content/school.svg";
import flats from "./content/flats.svg";

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

  if (data === "flats") {
    backStr = `url(${flats})`;
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

    @keyframes speechBubbleScroll {
      0% {
        
      }
      15%{
        transform:translateY(0)
      }
      20% {
        transform:translateY(-100%)
      }
      25% {
        transform:translateY(-100%)
      }
      40% {
        transform:translateY(-100%)
      }
      45% {
        transform:translateY(-200%)
      }
      60% {
        transform:translateY(-200%)
      }
      65% {
        transform:translateY(-300%)
      }
      90% {
        transform:translateY(-300%)
      }
      95% {
        transform:translateY(-400%)
      }
      100% {
        transform:translateY(-400%)
      }
    }

    .up {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 250px;
      animation: speechBubbleScroll 20s infinite;
    }

`;

export default GlobalStyle;
