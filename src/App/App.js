import React, { Component } from 'react';
import Home from './Home';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid='app' className='App'>
        {/*TODO GTB-知识点: - Home组件有点多余*/}
        <Home />
      </div>
    );
  }
}

export default App;
