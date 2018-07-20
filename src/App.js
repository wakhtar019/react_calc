import React, { Component } from 'react';
import Calc from './components/calc';
import Aux from '../src/Auxiliary/Auxiliary';


class App extends Component {
  render() {
    return (
      <Aux>
        <Calc />
      </Aux>
    );
  }
}

export default App;
