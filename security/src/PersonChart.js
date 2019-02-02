
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import SideBar from './SideBar.js';
import chart from './img/chart.jpg';
import './App.css'
import ChartControlBarPerson from './ChartControlBarPerson.js';


class PersonChart extends Component {


    render() {
        return (
            <div className="container">

                <div>
                    <SideBar />
                    <Header />
                </div>
                <div className="chart-view">
                    <form>
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
                    </form>

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