import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        identityPoolId: '', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'eu-west-1', // REQUIRED - Amazon Cognito Region
        userPoolId: 'eu-west-1_jVFXvXpXv', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '5aj4e4ngt0m1s9ec804iln63rh', //OPTIONAL - Amazon Cognito Web Client ID
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withAuthenticator(App);
