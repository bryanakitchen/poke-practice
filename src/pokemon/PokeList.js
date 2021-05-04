import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.scss';

export default class PokeList extends Component {
  render() {
    return (
      <div className="PokeList">
        <PokeItem />
        <PokeItem />
        <PokeItem />
        <PokeItem />
        <PokeItem />
        <PokeItem />
      </div>
    );
  }
}
