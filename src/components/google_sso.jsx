import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

const GoogleSso = (props) => {

  const clientIdGoogle = "1061265429801-7uus4h7875pjo27adq3oh9m23lhh0kpe.apps.googleusercontent.com";
  const key = props.key;


  const onInputChange = props.onKeyChange


  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    onInputChange(response.profileObj.googleId)
  }

  return (
    <div>
      <GoogleLogin
        clientId={ clientIdGoogle }
        buttonText="Login"
        onSuccess={ responseGoogle }
        onFailure={ responseGoogle }
        cookiePolicy={ 'single_host_origin' }
        // isSignedIn={true}
      />
    </div>
  );
};

export default GoogleSso;
