import React, { Component } from 'react';

import './App.css';

import SideBar from './SideBar.js';
import Header from'./Header.js';

class DevTeam extends Component {
  render() {
    return (

        <div className = "container">


        <SideBar />
        <Header />

        <div className = "dev-team">

        <div>
            <h1>
                Development Team
            </h1>
        <p>
            Perptrac is a physical security 
            surveillance system and method developed 
            and patented by John H. Malone, 
            2016 Connecticut Prosecutor of the Year,
            retired U.S. Naval Captain
        </p>
        </div>
        <div>
        <p>
            This demo application has been disigned and 
            developed by Carey Baldwin, Statistician and 
            Software Engineer with   
            <a href = 'www.greenlineanalytics.com'> Green Line Analytics</a>
            
        </p> 
        </div>
    </div>
    </div>
  )}
}

  export default DevTeam