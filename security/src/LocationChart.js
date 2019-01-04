
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar.js';
import Header from './Header';
import chart from './img/chart.jpg';
import './App.css'
import ChartControlBar from './ChartControlBar.js';


class LocationChart extends Component {


render() {
    return(
        <div className = "container">

            <div>
            <SideBar />
            <Header />
            </div>
            <div className = "page-wrap">



            <form>
                <div className = "inputs">
                <h5>Please Enter a Location</h5>
                <input
                placeholder = "West Hartford, CT"
                 />
                <input
                placeholder = "January 1, 2017 6:00 am - January 2, 6:00 am"
                 />
                 </div>
                 <div className = "button-group">
                 <button>Search</button>

               
                 </div>
            </form>

             <ChartControlBar/>
            <div className = "chart-container">
            <div className = "chart">
                 <img src={chart} />
             </div>
            </div>
        </div>
        </div>
    )
}

}

export default LocationChart;