import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import searchcontrols from './img/searchcontrols.jpg';

const ChartControls = () => {
    return (
        <div className = "container">
        <div>
        <SideBar />
        <Header />
        </div>
            <div className = "page-wrap">
            <div className = "search-controls">
            <img src={searchcontrols} />
            </div>
            </div>
        </div>

    )};

export default ChartControls;
