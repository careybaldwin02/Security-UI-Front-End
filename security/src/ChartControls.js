import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import './App.css';
import searchcontrols from './img/searchcontrols.jpg';

const ChartControls = () => {
    return (
        <div className = "container">
        <div>
        <SideBar />
        </div>
        <div id = "page-wrap">
        <div className = "map-controls">
        <img src={searchcontrols} />
        </div>
        </div>
        </div>

    )};

export default ChartControls;