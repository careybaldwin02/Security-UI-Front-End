import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import NavBar from './NavBar.js';


class About extends Component {
  render() {
    return (
    <div className = "container">
    <NavBar />
      <div className="about">
      <h1>About</h1>
      <div className = "about-menu">
      <ul className = "outside-list">
        <li>Help           
            
            <ul className = "inside-list">
                <Link to = {'/faq'}>
                    <div>
                        <li>FAQs</li>
                    </div>
                </Link> 
                <Link to = {'/user-manual'}>
                    <div>
                        <li>User Manual</li>
                    </div>
                </Link>
                <Link to = {'/contact-support'}>
                    <div>
                        <li>Contact Support</li>
                    </div>
                </Link>
            </ul>
        </li>
        <Link to = {'/privacy'}>
            <div>
                <li>Privacy Policy</li>
            </div>
        </Link>
        <li>
        Licenses (Patent No.: US 10,045,156)
        </li>
        <li>
        Version .01
        </li>
      </ul>  
      </div>
      </div>
    </div>
    );
  }
}

export default About;