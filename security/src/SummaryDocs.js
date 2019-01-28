import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="summary-docs">

        <h1>Summary Documents</h1>
            <ul>
                <li>
                    <Link to = "/executive">
                    <h3>Executive Summary</h3>  
                    </Link>                 
                </li>
                <li>
                    {/* link to list of names, one name links to black list detail fig 8*/}
                    <Link to = '/full-summary'>
                    <h3>Full Summary</h3>
                    </Link>   
                </li>
                    {/* link to list of names */}
                    <Link to = '/prospectus'>
                    <h3>Marketing Prospectus</h3>
                    </Link>
            </ul>
            </div>
        </div>

      </div>
    );
  }
}

export default Settings;