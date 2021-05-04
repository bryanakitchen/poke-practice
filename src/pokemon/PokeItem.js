import React, { Component } from 'react';
import './PokeItem.scss';

export default class PokeItem extends Component {
  render() {
    return (
      <div className="PokeItem">
        <h3>Name of Puppy</h3>
        <img src="https://place-puppy.com/210x210" alt="puppy"/>
        <p>Type: Cute</p>
      </div>
    );
  }
}
