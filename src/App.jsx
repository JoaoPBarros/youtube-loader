import React, { Component } from 'react';
import GoogleSso from './components/google_login';
import './styles/global.scss';

class App extends Component {
  render() {
    return (
      <div>
        <GoogleSso />
      </div>
    );
  };
}

export default App;
