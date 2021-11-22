import React, { Component } from 'react';
import GoogleSso from './components/google_login';
import SearchBar from './components/search_bar';
import './styles/global.scss';

class App extends Component {
  render() {
    return (
      <div>
        {/* <GoogleSso /> */}
        <SearchBar />
      </div>
    );
  };
}

export default App;
