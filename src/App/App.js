import React, { Component } from 'react';
import Home from './Home';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Home />
      </div>
    );
  }
}

export default App;
