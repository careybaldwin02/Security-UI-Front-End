import React from 'react';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';

const FullSummary = () => {
    return (
        <div className = "container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div className = "docs">
                <p>Full Summary</p>
                {/* <img src={mapcontrols} /> */}
            </div>
        </div>
    )};

export default FullSummary;