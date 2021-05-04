import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.scss';

export default class PokeList extends Component {
  render() {
    const { pokeProp } = this.props;
    return (
      <ul className="PokeList">
        {pokeProp.map(item => (
          <PokeItem itemProp={item} key={item._id} />
        ))}
      </ul>
    );
  }
}
