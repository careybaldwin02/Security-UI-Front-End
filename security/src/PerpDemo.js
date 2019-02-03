import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import blacklistprofile from './img/blacklistprofile.jpg';


class Settings extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <SideBar />
                    <Header />
                </div>
                {/* <h1>Profile of Chuck Santiago</h1> */}
                <div className="perp-demo">
                    <div className="perp-demo-chart">
                        <img src={blacklistprofile} />
                    </div>
                    <div className="perp-demo-list">
                        <ul>
                            <li>Current Location</li>
                            <li>Share Information</li>
                            <li>Add to Watchlist</li>
                            <li>Add to Whitelist</li>
                            <li><i class="fas fa-shopping-cart"></i>Purchase Information</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Settings;