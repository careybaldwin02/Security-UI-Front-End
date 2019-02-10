import React, { Component } from "react";
import { Link } from "react-router-dom";

import SideBar from "./SideBar";
import Header from "./Header";
import MapsContainer from "./Map.js";
import MapControlBar from "./MapControlBar.js";
import staticmap from "./img/staticmap.png";
import "./App.css";

class UserInfo extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <SideBar />
                    <Header />
                </div>
                <div className="user-container">
                    <div className="user">
                        <h1 className="account-settings">Account Settings</h1>
                        {/* <Link to="/manage-subscription"> */}
                        <h3>Manage Subscription</h3>
                        {/* </Link> */}
                        <h3>My Videos</h3>
                        {/* link to list of names, one name links to black list detail fig 8*/}
                        <h3>Parental Controls</h3>
                        {/* <Link to={'/personal-profile'}> */}
                        <h3>Personal Profile</h3>
                        {/* </Link> */}
                    </div>

                    <div className="map-container">
                        <p className="user-location">Your current location:</p>
                        <img src={staticmap} />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
