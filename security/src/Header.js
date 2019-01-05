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
        <h5>
            The Next Generation of Physical Surveillance
        </h5>
        </Link>
        </div>

        <Link to={'/emergency'}>
        <div className = "emergency">
            <i className="fas fa-phone"> 911</i>
        </div>
        </Link>

        <div>
        </div>
        </div>
)};


export default Header;
