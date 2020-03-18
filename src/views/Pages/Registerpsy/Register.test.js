import React from 'react';
import ReactDOM from 'react-dom';

import Registerpsy from './Registerpsy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registerpsy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
