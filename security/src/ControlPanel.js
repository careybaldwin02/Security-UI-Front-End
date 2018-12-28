import React, { Component } from 'react';
import fig_10 from './img/fig_10.jpg';
import SideBar from './SideBar';
import './App.css';


class ControlPanel extends Component {
  render() {
    return (
    <div className = "container">
            <SideBar />
        <div className="settings">

        <h2>General Control Panel</h2>
        <img src={fig_10} />
        
        </div>

      </div>
    );
  }
}

export default ControlPanel;