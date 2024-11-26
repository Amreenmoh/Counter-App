
import './App.css';
import React from'react';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div>
      <h1>
        React State change example
      </h1>
      <ClassCounter/>
      <FunctionalCounter />
    </div>
  )
}

export default App;
