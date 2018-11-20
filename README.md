# React Latency

A packaged version of the latency widget used by Jared Palmer in his [Moving To React Suspense](https://www.youtube.com/watch?v=SCQgE4mTnjU) talk from React Conf 2018,

## How To Use

The following examples are based around an app in it's default state when generated with `create-react-app`.

The package exports a default export and 2 named exports:

- default: `init` - a function that should be called at some point in your application to instantiate the debugger widget
- `AppWrapper` - a HOC that needs to wrap your application/component
- `mockApiCall` - a function to replace any fetch calls in your app that you wish to mock and add latency to

#### Import `AppWrapper` and wrap the App component with it:

```javascript
import React, { Component } from 'react';
import { AppWrapper } from 'react-latency';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default AppWrapper(App);
```

#### Import `mockApiCall` and use it in place of a fetch call:

```javascript
import React, { Component } from 'react';
import { AppWrapper, mockAPICall } from 'react-latency';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const result = await mockAPICall('/test', { hiphip: 'hooray' });
    console.log(result);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default AppWrapper(App);
```

#### Import `init` and invoke the function somewhere in your application, e.g. the index.js of your create-react-app application:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import init from 'react-latency';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

init();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

## Credit

Thanks to [Jared Palmer](https://github.com/jaredpalmer) and [Dan Abramov?](https://github.com/gaearon) for the code.
