import React, { Component } from 'react';
import './PokeItem.scss';

export default class PokeItem extends Component {
  render() {
    const { itemProp } = this.props;
    return (
      <li className="PokeItem">
        <h3>{itemProp.pokemon}</h3>
        <img src={itemProp.url_image} alt={itemProp.pokemon} />
        <p>Type: {itemProp.type_1}</p>
      </li>
    );
  }
}
