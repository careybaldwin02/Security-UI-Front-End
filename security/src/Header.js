import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const MainHeader = () => {
    return(
    <div className = "header">
    <div className = "favorites">
        <Link to={'/favorites'}>
        <i className="fas fa-star"></i>
        </Link>
        </div>
        <Link to ="/main">
        <div className = "title-logo">
        <h1>PERPTRAC</h1>
        <i className="fab fa-product-hunt faa-pulse animated"></i>

        </div>
        </Link>
        <Link to={'/emergency'}>
        <div>
            <i className="fas fa-phone"> 911</i>
        </div>
        </Link>

        <div>
        <h5>
            The Next Generation of Physical Security
        </h5>
        <p>
            Take control of your personal security
        </p>
        </div>

    </div>
)};

// const LoginHeader = () => {
//     return(
//     <div className = "header">
//     <Link to ="/main">
//     <div className = "title-logo">
//     <h1>PERPTRAC</h1>
//     <i class="fab fa-product-hunt faa-pulse animated"></i>
//     </div>
//     </Link>
//     </div>
// )};

export default MainHeader;
