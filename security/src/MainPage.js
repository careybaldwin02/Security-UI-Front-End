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
            <form>
                <label>People Search</label>
                <input
                placeholder = "Enter a name or physical address"
                 />
                <label>Geographic Search</label>
                <input
                placeholder = "Please enter a zip code"
                 />
            </form>
            </div>
        </div>
    )
}

}

export default MainPage;