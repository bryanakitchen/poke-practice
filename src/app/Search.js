import React, { Component } from 'react';

export default class Search extends Component {
    state = {
      search: '',
      typeValue: ''
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.state);
    }

    handleChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleFilter = ({ target }) => {
      this.setState({ typeValue: target.value });
    }

    render() {
      const { search } = this.state;

      return (
        <form onSubmit={this.handleSubmit} >
          <input value={search} onChange={this.handleChange} />

          <select onChange={this.handleFilter}>
            <option value=''>All</option>
            <option value='grass'>Grass</option>
            <option value='fire'>Fire</option>
            <option value='water'>Water</option>
            <option value='bug'>Bug</option>
            <option value='normal'>Normal</option>
          </select>

          <button>Search</button>
        </form>
      );
    }
}
