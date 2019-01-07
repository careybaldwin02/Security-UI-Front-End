import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

import SideBar from './SideBar.js';
import Header from'./Header.js';

class DevTeam extends Component {
  render() {
    return (

        <div className = "container">


        {/* <SideBar />
        <Header /> */}

        <div className = "perptrac">

        <div className = "title-logo">
        <h1>PERPTRAC</h1>
        <i className="fab fa-product-hunt faa-pulse animated"></i>
        </div>
        <p>
            The Next Generation of Physical Surveillance
        </p>

        </div>

        <div className = "dev-team">

        <div>
            <h1>
                Development Team
            </h1>
        <p>
            Perptrac is a physical security 
            surveillance system and method developed 
            and patented by John H. Malone, 
            2016 Connecticut Prosecutor of the Year and
            retired U.S. Naval Captain
        </p>
        </div>
        <div>
        <p>
            This demo application has been disigned and 
            developed by Carey Baldwin, Statistician and 
            Software Engineer with   
            <a href = {"http://www.greenlineanalytics.com"}
            target="_blank" 
            > Green Line Analytics</a>
            
        </p> 
        </div>
    </div>
    </div>
  )}
}

  export default DevTeam