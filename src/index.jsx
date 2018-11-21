import React from 'react';
import ReactDOM from 'react-dom';

import appWrapper, { Debugger } from './Debugger';
import { mockAPICall } from './utils';

function init() {
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

export { appWrapper, init, mockAPICall };
