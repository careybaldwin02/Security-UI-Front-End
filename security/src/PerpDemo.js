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

        <h2>Profile of John Doe</h2>
            <ul>
                <li>    
                    <a href="#">Current Location</a>               
                </li>
                <li>    
                    <a href="#">Share Information</a>               
                </li>
                <li>
                    {/* link to list of names, one name links to black list detail fig 8*/}
                    <a href="#">Add to Blacklist</a>   
                </li>
                    {/* link to list of names */}
                    <a href="#">Add to Whitelist</a>
                <li>
                    {/* link to list control */}
                    <i class="fas fa-shopping-cart"></i>
                    <a href="#"> Purchase Information</a>
                </li>
            </ul>

            </div>
        </div>

      </div>
    );
  }
}

export default Settings;