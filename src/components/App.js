import React, { Component } from 'react';
import NumButtonCell from './NumButtonCell';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NumButtonCell>1</NumButtonCell>
    );
  }
}

export default App;
