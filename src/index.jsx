import React from 'react';
import ReactDOM from 'react-dom';

import AppWrapper, { Debugger } from './Debugger';
import { mockAPICall } from './utils';

export default function debug() {
  if (typeof document === 'undefined') {
    return;
  }

  const mount = document.createElement('div');
  mount.setAttribute('id', 'debugger');
  ReactDOM.render(<Debugger />, mount);

  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(mount);
  });
}

export { AppWrapper, mockAPICall };
