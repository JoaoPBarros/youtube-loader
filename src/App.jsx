import React, { Component } from 'react';
import YoutubeSearch from 'youtube-api-search';
import GoogleSso from './components/google_sso';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
import './styles/global.scss';

const API_KEY = "AIzaSyAhfUHei8j0yU3gc2LczW3cXNcrEr9oBqM"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      key:''
    }

    this.existKey = this.existKey.bind(this)
  }

  videoSearch(searchTerm) {
    YoutubeSearch({
      key: API_KEY,
      term: searchTerm
    }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })
  }

  existKey = () => {
    return localStorage.getItem('key') ?? this.setState({ key: localStorage.getItem('key') })
  }



  render() {
    return !localStorage.getItem('key') && !this.state.key
      ? (
        <div>
          <GoogleSso
            key={this.state.key}
            onKeyChange={ value => {
              localStorage.setItem('key', value)
              this.setState({ key: value })
            }}
          />
        </div>
      )
      : (
        <div>
          <SearchBar
            onSearchTermChange={ searchTerm => this.videoSearch(searchTerm) }
          />
          <VideoDetails video={ this.state.selectedVideo } />
          <VideoList
            onVideoSelect={ userSelected => this.setState({ selectedVideo: userSelected }) }
            videos={ this.state.videos } />
        </div>
      );
  };
};



export default App;
