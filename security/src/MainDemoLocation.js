
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.js';
import GoogleMapsContainer from './map.js';

import './App.css'


class MainDemoLocation extends Component {


render() {
    return(
        <div className = "container">

            <NavBar />
        
            <div className = "main">

            <form>
                <div className = "inputs">
                <Link to="/location-demo">
                <i class="far fa-compass"> demo location search</i>
                </Link>

                <input
                placeholder = "Enter a zip code, Town or Country"
                 />
                <input
                placeholder = "Select a time frame"
                 />
                 </div>
                 <div className = "button-group">
                 <button>Search By Location</button>
                 </div>
            </form>
            
            <GoogleMapsContainer />

            </div>
        </div>
    )
}

}

export default MainDemoLocation;