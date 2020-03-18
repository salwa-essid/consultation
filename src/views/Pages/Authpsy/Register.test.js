import React from 'react';
import ReactDOM from 'react-dom';
import Authpsy from './Authpsy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Authpsy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
