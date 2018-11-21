import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.js';

import './App.css'


class MainPage extends Component {


render() {
    return(
        <div className = "container">

            <NavBar />
        
            <div className = "main">

            <h2>Search Options</h2>
            <Link to = "/recent">
            <button>View Recent Searches</button>
            </Link>

            <form>
                 <div className = "inputs">
                 <i class="far fa-user"> demo person search</i>
                <input
                placeholder = "Enter a name or home address of a person"
                 />

                <input
                placeholder = "Select a time frame"
                 />
                </div>
                <div className = "button-group">
                 <button>Search By Person</button>
                 </div>
            </form>

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


            </div>
        </div>
    )
}

}

export default MainPage;