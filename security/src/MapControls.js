import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import mapcontrols from './img/mapcontrols.jpg';

const MapControls = () => {
    return (
        <div className = "container">
        <div>
        <SideBar />
        <Header />
        </div>
        <div id = "page-wrap">
        <div className = "map-controls">
        <img src={mapcontrols} />
        </div>
        </div>
        </div>

    )};

export default MapControls;