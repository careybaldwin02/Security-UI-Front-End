import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const MainHeader = () => {
    return(
    <div className = "header">
    <Link to={'/emergency'}>
        <div>
        <i class="fas fa-phone"> 911</i>
        </div>
    </Link>
    <Link to ="/main">
    <div className = "title-logo">
    <h1>PERPTRAC</h1>
    <i class="fab fa-product-hunt faa-pulse animated"></i>
    </div>
    </Link>
    <div>
    <Link to={'/favorites'}>
        <i class="fas fa-star"></i>
    </Link>
    </div>
    </div>
)};

const LoginHeader = () => {
    return(
    <div className = "header">
    <Link to ="/main">
    <div className = "title-logo">
    <h1>PERPTRAC</h1>
    <i class="fab fa-product-hunt faa-pulse animated"></i>
    </div>
    </Link>
    </div>
)};

export default MainHeader;
export default LoginHeader;