import React, { Component } from 'react';

import './App.css';

import SideBar from './SideBar.js';

class DevTeam extends Component {
  render() {
    return (

        <div className = "container">

        <div>
        <SideBar />
        </div>
        <div className = "page-wrap">

        <p>
            Perptrac is a physical security 
            surveillance system and method developed 
            and patented by John H. Malone, 
            2016 Connecticut Prosecutor of the Year,
            retired U.S. Naval Captain
        </p>
        <p>
            This demo application has been disigned and 
            developed by Carey Baldwin, Statistician and 
            Software Engineer with Green Line Analytics
            www.greenlineanalytics.com
        </p> 
    </div>
    </div>
  )}
}

  export default DevTeam