import React, { Component } from 'react';
import YoutubeSearch from 'youtube-api-search';
import GoogleSso from './components/google_sso';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_detail';
import VideoList from './components/video_list';
import './styles/global.scss';

const API_KEY = "AIzaSyAhfUHei8j0yU3gc2LczW3cXNcrEr9oBqM"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('marvel')
  }

  videoSearch(term) {
    YoutubeSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })
  }

  render() {
    return (
      <div>
        <GoogleSso />
        <SearchBar onSearchTermChange={ searchTerm => this.videoSearch(searchTerm) } />
        <VideoDetails video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ userSelected => this.setState({ selectedVideo: userSelected }) }
          videos={ this.state.videos } />
      </div>
    );
  };
};



export default App;
