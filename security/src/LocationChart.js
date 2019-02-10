
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar.js';
import Header from './Header';
import chart from './img/chart.jpg';
import VideoTrace from './VideoTrace';
import './App.css'
import ChartControlBar from './ChartControlBar.js';
import searchcontrols from './img/searchcontrols.jpg';
import Modal from './Modal';

class LocationChart extends Component {
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
                <div className="chart-view">
                <div>
                    <h1>Location Search: Chart View</h1>
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
                                The demonstration below shows how a user could input a location and time frame.
                                The chart would then display detailed information about the phone data within these specifications.
                            </p>
                        </div>
                        <div className="inputs">
                            <h5>Please Enter a Location</h5>
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
                            A user could view a chart showing specific information related to the location searched.  
                            Within this view the user could apply filters in order to achieve their desired information.
                            Please try the dropdown menu for some examples. 
                        </div>
                    </div>
                    <div className="chart-container">
                        <ChartControlBar />
                        <div className="chart">
                            <img src={chart} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LocationChart;