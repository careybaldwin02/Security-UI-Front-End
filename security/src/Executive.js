import React from 'react';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';

const Executive = () => {
    return (
        <div className = "container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div className = "docs">
                <p>exutive summary</p>
                {/* <img src={mapcontrols} /> */}
            </div>
        </div>
    )};

export default Executive;