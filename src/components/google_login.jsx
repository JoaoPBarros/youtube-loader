import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

class GoogleSso extends Component {

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }

  clientIdGoogle = "1061265429801-7uus4h7875pjo27adq3oh9m23lhh0kpe.apps.googleusercontent.com"

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={ this.clientIdGoogle }
          buttonText="Login"
          onSuccess={ this.responseGoogle }
          onFailure={ this.responseGoogle }
          cookiePolicy={ 'single_host_origin' }
          isSignedIn={true}
        />
      </div>
    );
  }
};

export default GoogleSso;
