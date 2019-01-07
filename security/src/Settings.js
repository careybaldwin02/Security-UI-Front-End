import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ControlPanel from './ControlPanel';

import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';


class Settings extends Component {
  render() {
    return (
    <div className = "container">
        <div>
        <SideBar />
        <Header />
        </div>
        <div className = "page-wrap">
        <div className="settings">

        <h1>Settings</h1>
            <ul>
                <li>
                    <Link to = "/control-panel">
                    <h3>Control Panel</h3>  
                    </Link>                 
                </li>
                <li>
                    {/* link to list of names, one name links to black list detail fig 8*/}
                    <Link to = '/blacklist'>
                    <h3>Access your Watchlist</h3>
                    </Link>   
                </li>
                    {/* link to list of names */}
                    <Link to = '/whitelist'>
                    <h3>Access your Whitelist</h3>
                    </Link>
                <li>
                    <Link to ='/list-controls'>
                    <h3>Access your List Controls</h3>
                    </Link>
                </li>
            </ul>

            </div>
        </div>

      </div>
    );
  }
}

export default Settings;