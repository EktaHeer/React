import React from 'react';

import './App.css';
import Welcome from './components/functional';
import Greet from './components/classcomp';
import HelloJSX from './components/hello';
function App() {
  return (
    <div className="App">
      <h1>Types of Components</h1>
    <Welcome />
      <Greet className/> 
      <HelloJSX />
    </div>
  );
}

export default App;
