import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LoginPage from './LoginPage.js';
import MainPage from './MainPage.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "header">
        <h1>PERPTRAC</h1>
        <i class="fab fa-product-hunt"></i>
      </div>
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
