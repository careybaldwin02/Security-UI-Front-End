import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import SideBar from './SideBar.js';


class About extends Component {
  render() {
    return (
    <div className = "container">
    <SideBar />
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
            <Link to = {'/development-team'}>
            <div>
                <li>
                    Development Team
                </li>
            </div>
            </Link>
            <div>
                <li>Report Abuse</li>
            </div>
        <Link to = {'/privacy'}>
            <div>
                <li>Privacy Policy</li>
            </div>
        </Link>


        <li>
            <a href = {"http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10045156.PN.&OS=PN/10045156&RS=PN/10045156"}
            target="_blank" 
            >
            Patent No.: US 10,045,156; </a> International Patent Pending

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