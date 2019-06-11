import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Clouds, Landing } from "./Components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

function App() {
  const backgroundUrls = {
    home: "../public/content/city-day-edited.svg",
    cat:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg"
  };

  return (
    <BrowserRouter>
      <GlobalStyle {...backgroundUrls} />
      <div className='App'>
        <Clouds />
        <Landing />
        <p>Hello World!</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
