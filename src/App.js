import React, { Component } from 'react';
import './App.css';

let name = "DBS React DEMO"
let frameworks = [{
  name: 'React',
  description: 'A library'
},
{
  name: 'Angular',
  description: 'A framework'
}, {
  name: 'VUE',
  description: 'A framework'
}, {
  name: 'AngularJS',
  description: 'A framework'
}, {
  name: 'Ember',
  description: 'A framework'
}, {
  name: 'jQuery',
  description: 'hmmm'
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-row">
          <div className="w-25"></div>
          <div className="w-75"></div>
        </div>
      </div>
    );
  }
}

export default App;
