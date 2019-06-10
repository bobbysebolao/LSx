import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Clouds, Landing } from "./Components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Clouds />
        <Landing />
        <p>Hello World!</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
