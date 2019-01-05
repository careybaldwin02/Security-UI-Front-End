import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import './App.css';


class BlackList extends Component {
  render() {
    return (
    <div className = "container">
            <SideBar />
            <Header />
        <div className="blacklist">

        <div className = "list-title">
        <h1>Watch List</h1>
        <Link to = "/list-controls"><i className="fas fa-sliders"></i>
        </Link>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Home Alarm System        
        </h4>
        <Link to = {'/blacklist-demo'}>
        <button>edit</button>
        <button>add/remove shortcut</button>
        <button className = "e-d">enable/disable</button>
        </Link>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Lorem Ipsem      
        </h4>
        <Link to = {'/blacklist-demo'}>
        <button>edit</button>
        <button>add/remove shortcut</button>
        <button className = "e-d">enable/disable</button>
        </Link>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Lorem Ipsem     
        </h4>
        <Link to = {'/blacklist-demo'}>
        <button>edit</button>
        <button>add/remove shortcut</button>
        <button className = "e-d">enable/disable</button>
        </Link>
        </div>

        <div className = "blacklist-item">
        <h4> 
            Lorem Ipsem        
        </h4>
        <Link to = {'/blacklist-demo'}>
        <button>edit</button>
        <button>add/remove shortcut</button>
        <button className = "e-d">enable/disable</button>
        </Link>
        </div>   
        </div>

      </div>
    );
  }
}

export default BlackList;