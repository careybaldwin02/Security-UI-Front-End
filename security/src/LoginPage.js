import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: use data-attributes for easier E2E testing

    return (
      <div className="Login">
      <h2>
         Please enter your credentials below.
        </h2>
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <input 
          type="text" 
          data-test="username" 
          value={this.state.username} 
          onChange={this.handleUserChange} 
          placeholder = "Username"
          />

          <input 
          type="password" 
          data-test="password" 
          value={this.state.password} 
          onChange={this.handlePassChange}
          placeholder = "Password"
          />

          <Link to = {`/main`}>
          <button 
          type="submit" 
          value="Log In" 
          data-test="submit">Login
          </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;