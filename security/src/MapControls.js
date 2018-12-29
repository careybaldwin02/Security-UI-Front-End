import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import './App.css';
import fig_9 from './img/fig_9.jpg';

const MapControls = () => {
    return (
        <div className = "container">
        <div>
        <SideBar />
        </div>
        <div id = "page-wrap">
        <div className = "map-controls">
        <img src={fig_9} />
        </div>
        </div>
        </div>

    )};

export default MapControls;