import logo from './logo.svg';
import './App.css';

import React from 'react';
import Webs from 'web3'

import DaiToken from './built-contracts/DaiToken.json'
import { construct } from 'harmony-reflect';

const Dai = (props) => {

  return (<p> Dai: {this.state.b}</p>)

}


class Dai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      b: '0'
    }
  }

  render() {
    return (
      <p> Dai: {this.state.b}</p>
    );
  }

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dai />
      </header>
    </div>
  );
}

export default App;
