import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const NavBar = (props) => {

    return (
        <div className = "nav-bar">
            <Link to = {"/main"}>
            <button className = "nav-button"> 
                Main Page
            </button>
            </Link>
            <Link to={`/about`}>
            <button className = "nav-button">
                About     
            </button>
            </Link>
            <Link to={'/'}>
            <button className = "nav-button">
                Back to Login   
            </button>
            </Link>

         </div> 
    )
}

export default NavBar;