import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import Header from './Header.js';
import './App.css';

class InfectionControl extends Component {

    
render() {
    return (
        <div className="container">
            <div>
                <SideBar />
                <Header />
            </div>
        </div>
    );
}
}

export default InfectionControl;