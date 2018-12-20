import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import LoginPage from './LoginPage.js';
import MainPage from './MainPage.js';
import Favorites from './Favorites.js';
import RecentSearches from './RecentSearches';
import About from './About.js';
import Privacy from './Privacy.js';
import UserInfo from './UserInfo.js';
import Settings from './Settings';
import MainDemoLocation from './MainDemoLocation';
import ControlPanel from './ControlPanel';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "header">
      <Link to={'/emergency'}>
          <div>
            <i class="fas fa-phone"> 911</i>
          </div>
        </Link>
        <Link to ="/main">
        <div className = "title-logo">
        <h1>PERPTRAC</h1>
        <i class="fab fa-product-hunt faa-pulse animated"></i>
        </div>
        </Link>

          <div>
          <Link to={'/favorites'}>
            <i class="fas fa-star"></i>
          </Link>
            <i class="fas fa-bars"></i>
          </div>


          
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

        <Route path = "/user" render={props =>
        (<UserInfo{...props}
        />
        )}
        />

        <Route path = "/settings" render={props =>
        (<Settings{...props}
        />
        )}
        />

        <Route path = "/control-panel" render={props =>
        (<ControlPanel{...props}
        />
        )}
        />

        <Route path = "/location-demo" render={props =>
        (<MainDemoLocation{...props}
        />
        )}
        />

      </div>
    );
  }
}

export default App;
