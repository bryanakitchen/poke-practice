import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import PokeList from '../pokemon/PokeList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <PokeList />
      </div>
    );
  }

}

export default App;
