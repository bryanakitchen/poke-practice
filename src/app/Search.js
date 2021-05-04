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

    render() {
      const { search } = this.state;
      const { typesProp } = this.props;

      return (
        <form onSubmit={this.handleSubmit} >
          <input value={search} onChange={this.handleChange} />
          <select>
            <option value=''>All</option>
            { typesProp.map(item => (
              <option>{item}</option>
            ))
            }
          </select>
          <button>Search</button>
        </form>
      );
    }
}
