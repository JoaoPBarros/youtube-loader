import React, { Component } from 'react';
import './styles/global.scss';
import GoogleLogin from 'react-google-login';

export class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="1061265429801-7uus4h7875pjo27adq3oh9m23lhh0kpe.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={ this.responseGoogle }
          onFailure={ this.responseGoogle }
          cookiePolicy={ 'single_host_origin' }
        />
      </div>
    );
  };
}

export default App;
