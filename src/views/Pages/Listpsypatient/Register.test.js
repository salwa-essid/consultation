import React from 'react';
import ReactDOM from 'react-dom';
import Listpsypatient from './Listpsypatient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Listpsypatient/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
