import React from 'react';
import ReactDOM from 'react-dom';
import Authpatient from './Authpatient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Authpatient />, div);
  ReactDOM.unmountComponentAtNode(div);
});
