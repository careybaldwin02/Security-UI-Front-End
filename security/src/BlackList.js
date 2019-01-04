import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import './App.css';


class BlackList extends Component {
  render() {
    return (
    <div className = "container">
            <SideBar />
        <div className="blacklist">

        <h2>Black List</h2>
        <div className = "list-controls">
            <Link to = "/list-controls">
                <button className = "list-controls">
                    List Controls<i className="fas fa-sliders"></i>
                </button>
            </Link>
        </div>
        <div className = "blacklist-item">
        <h4> 
            Jack the Ripper         
        </h4>
        <Link to = {'/blacklist-demo'}>
        <button>edit</button>
        <button className = "e-d">enable/disable</button>
        </Link>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Al Capone      
        </h4>
        <Link to = {'/blacklist-demo'}>
        <button>edit</button>
        <button className = "e-d">enable/disable</button>
        </Link>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Bonny and Clyde      
        </h4>
        <Link to = {'/blacklist-demo'}>
        <button>edit</button>
        <button className = "e-d">enable/disable</button>
        </Link>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Charles Manson        
        </h4>
        <Link to = {'/blacklist-demo'}>
        <button>edit</button>
        <button className = "e-d">enable/disable</button>
        </Link>
        </div>   
        </div>

      </div>
    );
  }
}

export default BlackList;