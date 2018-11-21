import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LoginPage from './LoginPage.js';
import MainPage from './MainPage.js';
import Favorites from './Favorites.js';
import RecentSearches from './RecentSearches';
import About from './About.js';
import Privacy from './Privacy.js';
import UserInfo from './UserInfo.js';
import GoogleMapsContainer from './Map.js';



class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "header">
        <h1>PERPTRAC</h1>
        <i class="fab fa-product-hunt faa-pulse animated"></i>
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

        <Route path = "/favorites" render={props =>
        (<Favorites {...props}
        />
        )}
        />

        <Route path = "/recent" render={props =>
        (<RecentSearches {...props}
        />
        )}
        />

        <Route path = "/about" render={props =>
        (<About {...props}
        />
        )}
        />

        <Route path = "/privacy" render={props =>
        (<Privacy{...props}
        />
        )}
        />

        <Route path = "/settings" render={props =>
        (<UserInfo{...props}
        />
        )}
        />

        <Route path = "/location-demo" render={props =>
        (<GoogleMapsContainer{...props}
        />
        )}
        />

      </div>
    );
  }
}

export default App;
