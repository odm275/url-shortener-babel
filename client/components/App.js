import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <h1> Hello App </h1>
        <Form />
      
      </div>
    );
  }
}

export default App;
