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
        <div className="perp-demo">

        <h1>Profile of John Doe</h1>
            <ul>
                <li>    
                    Current Location          
                </li>
                <li>    
                    Share Information            
                </li>
                <li>
                    {/* link to list of names, one name links to black list detail fig 8*/}
                    Add to Watchlist 
                </li>
                    {/* link to list of names */}
                    Add to Whitelist
                <li>
                    {/* link to list control */}
                    <i class="fas fa-shopping-cart">  </i>
                     Purchase Information
                </li>
            </ul>

            </div>
        </div>

      </div>
    );
  }
}

export default Settings;