import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Milly', age: 33 },
      { name: 'Manu', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DONT DO THIS: this.state.persons[0].name = 'Maximillian';
    this.setState( {
      persons: [
        { name: newName, age: 48},
        { name: 'Mildred', age: 53 },
        { name: 'Manuel', age: 350 }
      ]
    } );
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 48},
        { name: event.target.value, age: 53 },
        { name: 'Manuel', age: 350 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This really works!</p>
      <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        {/* <button onClick={() => this.switchNameHandler('Mildred')}>Switch Name</button> */}
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} 
        click={this.switchNameHandler}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
