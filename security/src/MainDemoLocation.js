
import React, { Component } from 'react';

import SideBar from './SideBar.js';
import Header from './Header.js';
import MapControlBar from './MapControlBar.js';
import VideoTrace from './VideoTrace';
import './App.css'
import staticmap from './img/staticmap.png';
import maptrails from './img/maptrails.png';
import Modal from './Modal';

class MainDemoLocation extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true, // for map controls
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <SideBar />
                    <Header />
                </div>
                <div className="main-demo-location">
                    <div>
                        <h1>Location Search: Maps and Videos</h1>
                        <i onClick={this.toggleHidden.bind(this)} class="far fa-play-circle"> <b>Video Demo</b> </i>
                    </div>
                    {!this.state.isHidden &&
                        <Modal>
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
                        </Modal>}
                    <div className="form">
                        <div className="video-info">
                            <p>
                                The demonstration below shows how a user could input a location and time frame.
                                The map would then display the paths of phone signals according to these specifications.
                                This could be implemented with the google maps API in combination with Waypoints.
                            </p>
                        </div>
                        <div className="inputs">
                            <input
                                placeholder="West Hartford, CT"
                            />
                            <input
                                placeholder="January 1, 2017 6:00 am - January 2, 6:00 am"
                            />
                        </div>
                        <div className="button-group">
                            <button>Search</button>
                        </div>
                        <div className="video-info">
                            A fully implemented map would allow the user to customize their view.
                            This could be supported by combining our technology with currently available video surveillance systems.
                            The user would also be able to apply filters to their view in order to display only needed information.
                            Please try the dropdown menus on the map.
                        </div>
                    </div>
                    <br />
                    {/* <div className="map-controls">
                        <h2 onClick={this.toggleHidden.bind(this)} >
                            Toggle Map-View / Map-Controls
                                <i className="fas fa-sliders"></i>
                            {!this.state.isHidden && <img src={mapcontrols} />}
                        </h2>
                    </div> */}

                    <MapControlBar />
                    {/* <div className="map">
                        <img src={staticmap} />
                    </div> */}

                    <div className="map-trails-container">
                        <div className="map-trails">
                            <img src={maptrails} />
                        </div>
                        <div className="map-names">
                            <div>
                                <h2 className="search-results"> <b>Search Results</b></h2>
                            </div>
                            <div>
                                <div className="input-name js">
                                    <input type='checkbox' /><h5>John Smith</h5>
                                </div>
                                <div className="input-name ms">
                                    <input type='checkbox' /><h5>Maria Sanchez</h5>
                                </div>
                                <div className="input-name sw">
                                    <input type='checkbox' /><h5>Simon Waters</h5>
                                </div>

                                <div className="input-name jn">
                                    <input type='checkbox' /><h5>Josh Newman</h5>
                                </div>
                                <div className="input-name cs">
                                    <input type='checkbox' /><h5>Chuck Santiago</h5>
                                </div>
                                <div className="input-name lv">
                                    <input type='checkbox' /><h5>Laura Valine</h5>
                                </div>
                                <div className="input-name jt">
                                    <input type='checkbox' /><h5>James Thompson</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default MainDemoLocation;