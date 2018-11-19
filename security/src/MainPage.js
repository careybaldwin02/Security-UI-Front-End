import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.js';

import './App.css'


class MainPage extends Component {

render() {
    return(
        <div className = "main-container">

            <NavBar />
        
            <div className = "main">

            <h2>Search Options</h2>
            <button>View Recent Searches</button>
            <p>or</p>
            <form>
                <div className = "inputs">
                <input
                placeholder = "Enter a zip code, Town or Country"
                 />
                <input
                placeholder = "Select a time frame"
                 />
                 </div>
                 <button>Search By Location</button>
            </form>
            <p>or</p>
             <form>
                 <div className = "inputs">
                <input
                placeholder = "Enter a name or home address of a person"
                 />

                <input
                placeholder = "Select a time frame"
                 />
                </div>
                 <button>Search By Person</button>
            </form>


            </div>
        </div>
    )
}

}

export default MainPage;