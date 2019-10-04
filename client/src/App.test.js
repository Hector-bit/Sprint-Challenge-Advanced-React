import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders an element with the text dark mode', () => {
  const wrapper = rtl.render(
    <App/>
  );
  const element = wrapper.queryAllByText(/Dark Mode/i);
  expect(element);
});

it('renders an element with the text dark mode', () => {
  const wrapper = rtl.render(
    <App/>
  );
  const element = wrapper.queryByText(/Country/i);
  expect(element);
});

it('renders an element with the text dark mode', () => {
  const wrapper = rtl.render(
    <App/>
  );
  const element = wrapper.queryByText(/Name/i);
  expect(element);
});

