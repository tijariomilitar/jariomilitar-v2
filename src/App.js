import React, { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import api from './Api.js';

function App() {

  useEffect(() => {
    api.get('/product/id/1').then(res => console.log(res.data));
  });

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

export default App;
