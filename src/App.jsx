import React, { Component } from 'react';
import YoutubeSearch from 'youtube-api-search';
import GoogleSso from './components/google_sso';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import './styles/global.scss';

const API_KEY = "AIzaSyAhfUHei8j0yU3gc2LczW3cXNcrEr9oBqM"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
  }

  videoSearch(term) {
    YoutubeSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data
      })
    })
  }

  render() {
    return (
      <div>
        <GoogleSso />
        <SearchBar />
        {/* <VideoList videos={this.state.videos} /> */}
      </div>
    );
  };
};



export default App;
