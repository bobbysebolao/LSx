import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Router, Switch } from 'react-router-dom'
import App from './App';
import {createMemoryHistory} from 'history';
import {render, fireEvent} from '@testing-library/react';

const renderWithRouter = (
  ui,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('full app rendering/navigating', () => {
  const { container, getByText } = renderWithRouter(<App />);
  expect(container.innerHTML).toMatch('Action Planner');
  const planningButton = getByText(/Make Action Plan/i);
  fireEvent.click(planningButton);
  expect(container.innerHTML).toMatch(/All action starts with a plan/i)
});

test('404 route', () => {
  const {container} = renderWithRouter(<App />, {
    route: '/something-that-does-not-match',
  })
  expect(container.innerHTML).toMatch('No match')
})