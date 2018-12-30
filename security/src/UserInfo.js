import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar';
import MapsContainer from './Map.js';
import './App.css';


class UserInfo extends Component {
  render() {
    return (
    <div className = "container">

        <div>
            <SideBar />
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
        <ul>
            <li>
                <Link to = "/manage-subscription">
                <a href="#">Manage Subscription</a>  
                </Link>                 
            </li>
            <li>
                {/* link to list of names, one name links to black list detail fig 8*/}
                <a href="#">Parental Controls</a>   
            </li>
        </ul>

        <div className = "map-container">
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