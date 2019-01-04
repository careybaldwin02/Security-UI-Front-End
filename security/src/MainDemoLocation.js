
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar.js';
import MapsContainer from './Map.js';

import './App.css'


class MainDemoLocation extends Component {


render() {
    return(
        <div className = "container">
            <div>
            <SideBar />
            </div>
            <div className = "page-wrap">
            <h2>
                Maps and Videos
            </h2>
            <form>
                <div className = "inputs">
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

            <div className = "map-container">
            <MapsContainer />
            </div>
        </div>
        </div>
    )
}

}

export default MainDemoLocation;