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
import MainDemoPerson from './MainDemoPerson';
import ControlPanel from './ControlPanel';
import MainHeader from './Header.js';
import MapControls from './MapControls.js';
import PerpDemo from './PerpDemo.js';
import SavedSearches from './SavedSearches';
import BlackList from './BlackList';
import LocationChart from './LocationChart';
import PersonChart from './PersonChart';


class App extends Component {
  render() {
    return (
      <div className="App">
      
       <MainHeader />

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

        <Route path = "/blacklist" render={props =>
        (<BlackList {...props}
        />
        )}
        />

        <Route path = "/saved" render={props =>
        (<SavedSearches {...props}
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

        <Route path = "/map-controls" render={props =>
        (<MapControls{...props}
        />
        )}
        />

        <Route path = "/location-demo" render={props =>
        (<MainDemoLocation{...props}
        />
        )}
        />

        <Route path = "/person-demo" render={props =>
        (<MainDemoPerson{...props}
        />
        )}
        />

        <Route path = "/location-chart" render={props =>
        (<LocationChart{...props}
        />
        )}
        />

        <Route path = "/person-chart" render={props =>
        (<PersonChart{...props}
        />
        )}
        />


        <Route path = "/perp-demo" render={props =>
        (<PerpDemo{...props}
        />
        )}
        />

      </div>
    );
  }
}

export default App;
