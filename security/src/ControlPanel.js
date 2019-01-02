import React, { Component } from 'react';
import configcontrol from './img/configcontrol.jpg';
import SideBar from './SideBar';
import './App.css';


class ControlPanel extends Component {
  render() {
    return (
    <div className = "container">
            <SideBar />
        <div className="settings">

        <h2>General Control Panel</h2>
        <img src={configcontrol} />
        
        </div>

      </div>
    );
  }
}

export default ControlPanel;