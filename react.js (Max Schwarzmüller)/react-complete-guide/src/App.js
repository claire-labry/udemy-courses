import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Button from './Button/button'
import Peeps from './Peeps/peeps'

class App extends Component {
  state ={
    persons:[
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render(){
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p> This is really working! </p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <Button/>
      <Peeps/>
    </div>
  );
}
}
export default App;
