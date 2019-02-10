import React, { Component } from "react";
import { Link } from "react-router-dom";

import SideBar from "./SideBar.js";
import Header from "./Header";
import MapsContainer from "./Map.js";
import VideoTrace from "./VideoTrace";
import MapControlBarPerson from "./MapControlBarPerson";
import mapcontrols from "./img/mapcontrols.jpg";
import "./App.css";
import staticmap from "./img/staticmap.png";
import Modal from './Modal';

class MainDemoLocation extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: true // for map controls
        };
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        return (
            <div className="container">
                <div>
                    <SideBar />
                    <Header />
                </div>
                <div className="main-demo-person">
                    <div>
                        <h1>Person Search: Maps and Videos</h1>
                        <i onClick={this.toggleHidden.bind(this)} class="far fa-play-circle"> <b>Video Demo</b> </i>
                    </div>
                    {!this.state.isHidden &&
                        <Modal>
                            <div>
                                <i onClick={this.toggleHidden.bind(this)} className="fas fa-times"></i>
                                <div className="video-trace">
                                    <div className="video-info">
                                        <p>With our technology, it is possible to search a location within a specificed time frame and view the paths of unique phone signals.
                                            The video below is an example of a visualization that could be generated based on geolocation tracking.
                                            <a href="https://www.zeit.de/datenschutz/malte-spitz-data-retention" target="_blank" >  Citation</a>
                                        </p>
                                    </div>
                                    <VideoTrace />
                                </div>
                            </div>
                        </Modal>}
                    <div className="form">
                        <div className="video-info">
                            <p>
                                The demonstration below shows how a user could input a person's
                                name and time frame. The map would then display the path of the
                                corresponding phone signal. This could be implemented with the
                                google maps API in combination with the Waypoints API.
                            </p>
                        </div>
                        <div className="inputs">
                            <h5>Please Enter a Name</h5>
                            <input placeholder="John Doe" />
                            <input placeholder="January 1, 2017 6:00 am - January 2, 6:00 am" />
                        </div>
                        <div className="button-group">
                            <button>Search</button>
                        </div>
                    </div>
                    {/* <div className="map-controls">
                        <h2 onClick={this.toggleHidden.bind(this)} >
                            Toggle Map-View / Map-Controls
                                <i className="fas fa-sliders"></i>
                            {!this.state.isHidden && <img src={mapcontrols} />}
                        </h2>
                    </div> */}
                    <br />
                    <MapControlBarPerson />
                    <div className="map">
                        <img src={staticmap} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainDemoLocation;
