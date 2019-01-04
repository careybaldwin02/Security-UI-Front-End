import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import './App.css';


class WhiteList extends Component {
  render() {
    return (
    <div className = "container">
            <SideBar />
            <Header />
        <div className="blacklist">

        <h2>White List</h2>
        
        <div className = "list-controls">
            <Link to = "/list-controls">
                <button className = "list-controls">
                    List Controls<i className="fas fa-sliders"></i>
                </button>
            </Link>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Mother Teresa        
        </h4>
        <button>edit</button>
        <button className = "e-d">enable/disable</button>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Mr. Rodgers   
        </h4>
        <button>edit</button>
        <button className = "e-d">enable/disable</button>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Aunt Janice
        </h4>

        <button>edit</button>
        <button className = "e-d">enable/disable</button>

        </div> 
        </div>

      </div>
    );
  }
}

export default WhiteList;