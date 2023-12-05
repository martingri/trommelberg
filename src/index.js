
import React from 'react';
import { render } from 'react-dom';
import Frontpage from './frontpage';
import 'typeface-roboto';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Frontpage />, rootElement);
}
          