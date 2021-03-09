import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>A Calculator</h2>
      </header>
      <h3>
        Created by Kara. Powered by Javascript, React, and Node.
      </h3>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
