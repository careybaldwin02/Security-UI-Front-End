import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const NavBar = (props) => {

    return (
        <div className = "nav-bar">
            <Link to = {"/main"}>
            <span>
            <i className="fas fa-search"></i>
            </span>
            </Link>
            <Link to={`/about`}>
            <span>
            <i className="fas fa-question"></i>
            </span>
            </Link>
            <Link to={'/'}>
            <span>
            <i class="fas fa-star"></i>
            </span>
            </Link>
            <Link to={'/'}>
            <span>
            <i className="fas fa-sign-in-alt"></i>
            </span>
            </Link>
            <Link to={'/'}>
            <span>
            <i class="fas fa-phone"> 911</i>
            </span>
            </Link>
            <Link to={'/'}>
            <span>
            <i class="far fa-user-circle"></i>
            </span>
            </Link>

         </div> 
    )
}

export default NavBar;