import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

class GoogleSso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientIdGoogle: "1061265429801-7uus4h7875pjo27adq3oh9m23lhh0kpe.apps.googleusercontent.com",
      key: ''
    };


    this.onKeyChange = this.onKeyChange.bind(this);
  }

  onKeyChange(value) {
    this.setState({ key: value });
  }

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    this.onKeyChange(response.profileObj.googleId)
    console.log(this.state.key)
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={ this.state.clientIdGoogle }
          buttonText="Login"
          onSuccess={ this.responseGoogle }
          onFailure={ this.responseGoogle }
          cookiePolicy={ 'single_host_origin' }
          // isSignedIn={true}
        />
      </div>
    );
  };
};

export default GoogleSso;
