
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import SideBar from './SideBar.js';
import chart from './img/chart.jpg';
import './App.css'
import ChartControlBarPerson from './ChartControlBarPerson.js';
import VideoTrace from './VideoTrace';
import searchcontrols from './img/searchcontrols.jpg';

class PersonChart extends Component {
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
                    <h1>Person Search: Chart View</h1>
                    <div className="video-trace">
                        <div className="video-info">
                            <p>With our technology, it is possible to search for a person within a specificed time frame and view the path of his/her phone signal.
                                The video below is an example of a visualization that could be generated based on geolocation tracking.
                                <a href="https://www.zeit.de/datenschutz/malte-spitz-data-retention" target="_blank" >  Citation</a>
                            </p>
                        </div>
                        <VideoTrace />
                    </div>
                    <div className="form">
                        <div className="video-info">
                            <p>
                                The demonstration below shows how a user could input a person's name and time frame.
                                The chart would then display information about that individual.
                                The information displayed could be customized according to user preference.
                            </p>
                        </div>
                        <div className="inputs">
                            <h5>Please Enter a Name</h5>
                            <input
                                placeholder="John Doe"
                            />
                            <input
                                placeholder="January 1, 2017 6:00 am - January 2, 6:00 am"
                            />
                        </div>
                        <div className="button-group">
                            <button>Search</button>
                        </div>
                    </div>

                    <div className="chart-controls">
                        <h2 onClick={this.toggleHidden.bind(this)} >
                            Toggle Chart-View / Chart-Controls
                                <i className="fas fa-sliders"></i>
                            {!this.state.isHidden && <img src={searchcontrols} />}
                        </h2>
                    </div>
                    <div className="chart-container">
                        <ChartControlBarPerson />
                        <div className="chart">
                            <img src={chart} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PersonChart;