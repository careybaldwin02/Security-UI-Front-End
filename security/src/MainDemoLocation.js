
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.js';
import MapsContainer from './Map.js';

import './App.css'


class MainDemoLocation extends Component {


render() {
    return(
        <div className = "container">
            <NavBar />
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
                 <button>Search By Location</button>
                 </div>
            </form>

            <div className = "map-container">
            <MapsContainer />
        </div>
        </div>
    )
}

}

export default MainDemoLocation;