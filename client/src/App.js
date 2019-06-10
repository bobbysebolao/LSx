import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Clouds} from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clouds />
        <p>
          Hello World!
        </p>
      </header>
    </div>
  );
}

export default App;
