import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Router, Switch } from 'react-router-dom'
import App from './App';
import {createMemoryHistory} from 'history';
import {render, fireEvent} from '@testing-library/react';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
