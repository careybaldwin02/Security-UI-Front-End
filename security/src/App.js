import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LoginPage from './LoginPage.js';
import MainPage from './MainPage.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path = "/" render = {props =>
        (< LoginPage {...props}
        />)}
        />

        <Route path = "/main" render={props =>
        (<MainPage {...props}
        />
        )}
        />
      </div>
    );
  }
}

export default App;
