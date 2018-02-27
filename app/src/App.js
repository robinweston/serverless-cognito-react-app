import React, { Component } from 'react';
import logo from './logo.svg';
import config from './config';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: config.auth
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCreateJob = this.onCreateJob.bind(this);
  }

  onCreateJob(e) {
    e.preventDefault();
    const jwt = this.props.authData.signInUserSession.idToken.jwtToken;
    const options = {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    };
    const url = config.api.baseUrl + '/job/create';
    fetch(url, options)
      .then(response => response.json())
      .then(body => {
        console.log(body);
        this.setState({ jobName: body.jobName });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello {this.props.authData.username}
        </p>
        <button onClick={this.onCreateJob}>Create job</button>
        {this.state.jobName &&
          <div>Created Job {this.state.jobName}</div>
        }
      </div>
    );
  }
}

export default withAuthenticator(App);
