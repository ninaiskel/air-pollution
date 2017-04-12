import React, { Component } from 'react';
import './App.css';

import Pollution from './components/pollution'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Pollution />
      </div>
    );
  }
}

export default App;
