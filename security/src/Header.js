import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SideBar from './SideBar';

const Header = () => {
    return(
    <div className = "header">
    <div className = "favorites">
        <Link to={'/favorites'}>
        <i className="fas fa-star"></i>
        </Link>
        </div>

        <Link to ="/main">
        <div className = "perptrac">
        <div className = "title-logo">
        <h1>PERPTRAC</h1>
        <i className="fab fa-product-hunt faa-pulse animated"></i>
        </div>
        <h5>
            The Next Generation of Physical Security
        </h5>
        </div>
        </Link>
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
