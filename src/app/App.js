import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import PokeList from '../pokemon/PokeList';
import request from 'superagent';

const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokeData: []
  }

  componentDidMount() {
    this.fetchPoke();
  }

  async fetchPoke() {
    const response = await request.get(API_URL);
    this.setState({ pokeData: response.body.results });
  }

  render() {
    const { pokeData } = this.state;

    return (
      <div className="App">
        <Header />
        <PokeList pokeProp={pokeData} />
      </div>
    );
  }

}

export default App;
