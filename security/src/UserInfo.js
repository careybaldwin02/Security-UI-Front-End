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
        <div className = "page-wrap">
        {/* <div className = "ca-container">

        <Link to = '/settings'>
        <i class="far fa-user">Account Settings</i>
        </Link>
        <Link to = '/settings'>
          <i class="fas fa-cog"> App Settings</i>
        </Link>
        </div> */}

        <div className = "user">
        <h2 className = "account-settings">Account Settings</h2>
            <div>
                <Link to = "/manage-subscription">
                <h3>Manage Subscription</h3>  
                </Link>                 
            </div>
            <div>
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

        {/* <p>(Developer Notes: By default this page will automatically display a standard
        PerpTrac map of the user’s current location, but the user can view standard account
        information by clicking on that column title. This account information will include a
        general configuration control panel where the user can adjust basic settings for the
        app’s search parameters. This page will display as a tabular chart. Please see the
        accompanying document of PerpTrac illustrations for a rudimentary visualization of
        the basic settings page.)</p> */}
        </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;