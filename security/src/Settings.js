import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ControlPanel from './ControlPanel';

import NavBar from './NavBar';
import './App.css';


class Settings extends Component {
  render() {
    return (
    <div className = "container">
            <NavBar />
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
                    <a href="#">Access your Blacklist</a>   
                </li>
                    {/* link to list of names */}
                    <a href="#">Access your Whitelist</a>
                <li>
                    {/* link to list control */}
                    <a href="#">Access your List Controls</a>
                </li>
            </ul>

        
        </div>

      </div>
    );
  }
}

export default Settings;