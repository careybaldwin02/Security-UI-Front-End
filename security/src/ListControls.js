import React from 'react';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import listcontrols from './img/listcontrols.jpg';

const ListControls = () => {
    return (
        <div className = "container">
            <div>
            <SideBar />
            <Header />
                </div>
                <div className = "page-wrap">
                <div className = "list-controls">
                <img src={listcontrols} />
                </div>
            </div>
        </div>
    )};

export default ListControls;