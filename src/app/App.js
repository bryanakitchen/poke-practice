import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import PokeList from '../pokemon/PokeList';
import request from 'superagent';
import Search from './Search';

const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokeData: [],
    search: ''
  }

  componentDidMount() {
    this.fetchPoke();
  }

  async fetchPoke() {
    const { search } = this.state;

    const response = await request
      .get(API_URL)
      .query({ pokemon: search });
    
    this.setState({ pokeData: response.body.results });
  }

  handleSearch = ({ search }) => {
    this.setState({ search }, () => this.fetchPoke());
  }

  render() {
    const { pokeData } = this.state;

    return (
      <div className="App">
        <Header />
        <Search onSearch={this.handleSearch} />
        <PokeList pokeProp={pokeData} />
      </div>
    );
  }

}

export default App;
