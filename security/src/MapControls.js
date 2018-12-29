import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import './App.css';

const MapControls = () => {
    return (
        <div className = "container">
        <div>
        <SideBar />
        </div>
        <div id = "page-wrap">
        <div className = "map-controls">
        <p>
            map controls here
        </p>
        </div>
        </div>
        </div>

    )};

export default MapControls;