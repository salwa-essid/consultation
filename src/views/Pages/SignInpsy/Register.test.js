import React from 'react';
import ReactDOM from 'react-dom';
import SignInpsy from './SignInpsy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignInpsy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
