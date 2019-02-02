import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
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
      <div className = "container">
      <div>
      {/* <SideBar />
      <Header /> */}

        <div className = "perptrac">
        <div className = "title-logo">
        <h1>TrailTracker </h1>
        <i class="fas fa-map-marker-alt faa-pulse animated"> </i>
        {/* <i className="fas fa-globe-americas faa-pulse animated"></i> */}
        {/* <i className="fab fa-product-hunt faa-pulse animated"></i> */}
        </div>
        <p>
            The Next Generation of Physical Surveillance
        </p>
        </div>

      </div>
      <div className="Login">

        <form onSubmit={this.handleSubmit}>
          {/* {
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
          /> */}

          {/* <div className = "remember"> 
          <label for = "remember">Remember me </label>
          <input 
          type="checkbox" 
          name="remember" 
          value="remember" 
          id = "remember"/>  
          </div> */}

          <div className = "login-group">

{/* ---------------- change this to allow access ---------------------*/}
          <Link to = {`/main`}>
          <button 
          type="submit" 
          value="Log In" 
          data-test="submit">Enter Demo Site
          </button>
          </Link>
          {/* <button 
          type="submit" 
          value="Log In" 
          data-test="submit">Register
          </button> */}
          </div>
          <br />
          <div className = "dev-team-link">
          <Link to = {"development-team"}>
            <p>
              Read more about the development team
          </p>
          </Link>
          </div>
        </form>

      </div>
      </div>
    );
  }
}

export default LoginPage;