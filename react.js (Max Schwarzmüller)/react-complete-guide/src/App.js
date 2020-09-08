import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button>Switch Name</button>
      <Person name='Remy' age='45'/>
      <Person name='Claire' age='26'>Hobbies: Gardening</Person>
    </div>
  );
}

export default App;
