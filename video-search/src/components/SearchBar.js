import React, { Component } from 'react';

class SearchBar extends Component {
  state = { searchTerm: '' };

  render() {
    return (
      <div className="one column row">
        <form
          className="ui form container icon input"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state.searchTerm);
          }}
        >
          <i className="search icon"></i>
          <input
            type="text"
            placeholder="Search videos"
            value={this.state.searchTerm}
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
