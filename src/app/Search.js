import React, { Component } from 'react';

export default class Search extends Component {
    state = {
      search: ''
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.state);
    }

    handleChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    render() {
      const { search } = this.state;
      return (
        <form onSubmit={this.handleSubmit} >
          <input value={search} onChange={this.handleChange} />
          <button>Search</button>
        </form>
      );
    }
}
