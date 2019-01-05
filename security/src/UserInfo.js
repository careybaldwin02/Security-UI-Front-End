import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar';
import Header from './Header';
import MapsContainer from './Map.js';
import MapControlBar from './MapControlBar.js';
import './App.css';


class UserInfo extends Component {
  render() {
    return (
    <div className = "container">

        <div>
            <SideBar />
            <Header />
        </div>

        <div className = "user">
        <div>
        <h1 className = "account-settings">Account Settings</h1>
            <div>
                <Link to = "/manage-subscription">
                <h3>Manage Subscription</h3>  
                </Link>                 
            </div>

                {/* link to list of names, one name links to black list detail fig 8*/}
                <h3>Parental Controls</h3>   
            </div>
            <Link to = {'/personal-profile'}>
                <div>
                    <h3>Personal Profile</h3>
                </div>
            </Link>

        <div className = "map-container">
            <MapControlBar />
            <MapsContainer />
        </div>
        </div>
        </div>
    )}
}

export default UserInfo;