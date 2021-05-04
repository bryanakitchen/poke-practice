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
    search: '',
    typeValue: '',
    fakeState: ''
  }

  componentDidMount() {
    this.fetchPoke();
  }

  async fetchPoke() {
    const { search, typeValue } = this.state;

    const response = await request
      .get(API_URL)
      .query({ pokemon: search })
      .query({ type: typeValue || undefined });

    const typeData = [...new Set(response.body.results.map(item => item.type_1))];

    this.setState({ pokeData: response.body.results, typesList: typeData });
  }

  handleSearch = ({ search, typeValue }) => {
    this.setState({ search, typeValue }, () => this.fetchPoke());
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
