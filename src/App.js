import React, { Component } from 'react';
import './App.css';

import Pollution from './components/pollution'
import Footer from './components/footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Pollution />
        <Footer />
      </div>
    );
  }
}

export default App;
