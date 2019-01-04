
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar.js';
import Header from './Header';
import MapsContainer from './Map.js';
import MapControlBar from './MapControlBar';

import './App.css'


class MainDemoLocation extends Component {


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
                <h5>Please Enter a Name</h5>
                <input
                placeholder = "John Doe"
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
            <MapControlBar />
            <MapsContainer />
            </div>
        </div>
        </div>
    )
}

}

export default MainDemoLocation;

