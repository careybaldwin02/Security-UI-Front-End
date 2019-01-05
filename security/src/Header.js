import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SideBar from './SideBar';

const Header = () => {
    return(
    <div className = "header">
    
        <Link to={'/favorites'}>
        <div className = "favorites">
        <i className="fas fa-star"></i>
        </div>
        </Link>



        <div className = "perptrac">
        <Link to ="/main">
        <div className = "title-logo">
        <h1>PERPTRAC</h1>
        <i className="fab fa-product-hunt faa-pulse animated"></i>
        </div>
        <p>
            The Next Generation of Physical Surveillance
        </p>
        </Link>
        </div>

        
        <div className = "alarm">
            <Link to = {'/alarm'}>
            {/* <div className = "alarm">
                Home Alarm
            </div> */}
            <i class="fas fa-bell"></i>
            {/* <i className="fas fa-house-damage"></i> */}
            </Link>
        </div>
        <div className = "emergency">
            <Link to={'/emergency'}>
            <i className="fas fa-phone"> 911</i>
            </Link>
        </div>


        <div>
        </div>
        </div>
)};


export default Header;
