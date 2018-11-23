import React, { Component } from 'react';
import NavBar from './NavBar';
import MapsContainer from './Map.js';
import './App.css';


class UserInfo extends Component {
  render() {
    return (
    <div className = "container">
            <NavBar />
        <div className="user">

        <div className = "ca-container">

        <h2>User Information</h2>
          <i class="fas fa-cog"> Settings</i>
        </div>

        <p>Your location:</p>
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
    );
  }
}

export default UserInfo;