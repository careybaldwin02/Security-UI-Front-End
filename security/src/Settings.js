import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ControlPanel from './ControlPanel';

import SideBar from './SideBar.js';
import './App.css';


class Settings extends Component {
  render() {
    return (
    <div className = "container">
        <div>
        <SideBar />
        </div>
        <div className = "page-wrap">
        <div className="settings">

        <h2>Settings</h2>
            <ul>
                <li>
                    <Link to = "/control-panel">
                    <a href="#">Control Panel</a>  
                    </Link>                 
                </li>
                <li>
                    {/* link to list of names, one name links to black list detail fig 8*/}
                    <Link to = '/blacklist'>
                    <a href="#">Access your Blacklist</a>
                    </Link>   
                </li>
                    {/* link to list of names */}
                    <Link to = '/whitelist'>
                    <a href="#">Access your Whitelist</a>
                    </Link>
                <li>
                    {/* link to list control */}
                    <a href="#">Access your List Controls</a>
                </li>
            </ul>

            </div>
        </div>

      </div>
    );
  }
}

export default Settings;