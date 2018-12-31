
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar.js';

import './App.css'


class PersonChart extends Component {


render() {
    return(
        <div className = "container">

            <div>
            <SideBar />
            </div>
            <div className = "page-wrap">



            <form>
                <div className = "inputs">
                <h5>Please Enter a Name</h5>
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

            <div className = "chart-container">
            <div className = "chart-control-buttons">
            <Link to = "/chart-controls">
            <button className = "chart-controls">
                Chart Controls<i className="fas fa-sliders"></i>
            </button>
            </Link>
            <Link to = "/chart-filters">
            <button>
                Filters<i class="fas fa-filter"></i>
            </button>
            </Link>
            </div>
            <h1>
                Chart
            </h1>
            </div>
        </div>
        </div>
    )
}

}

export default PersonChart;