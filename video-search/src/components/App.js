import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Header from './Header';

class App extends Component {
  onSearchSubmit = searchTerm => {
    console.log(searchTerm);
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <Header />
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
