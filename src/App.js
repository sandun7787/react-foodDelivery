import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </header>
      <main className="App-content">
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </main>
    </div>
  );
};

export default App;
