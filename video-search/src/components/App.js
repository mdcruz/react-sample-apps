import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import VideoList from './VideoList';
import axios from '../api/youtube-api';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    searchList: [],
    selectedVideo: null
  };

  onSearchSubmit = async searchTerm => {
    const res = await axios.get('/search', {
      params: { q: searchTerm }
    });

    this.setState({
      searchList: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  async componentDidMount() {
    this.onSearchSubmit('blippi');
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <Header />
          <SearchBar onSubmit={this.onSearchSubmit} />
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.searchList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
