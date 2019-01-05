import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';

import './App.css';


class SavedSearches extends Component {
  render() {
    return (
    <div className = "container">
        <div>
            <SideBar />
            <Header />
        </div>
      <div className="recent">
        <h1>
          Saved Searches
        </h1>
        <div className = "recent-item">
        <Link to = {'/perp-demo'}>
        <button>view</button>
        </Link>
        <p>John Doe, 406 E. Jefferson St. Ann Arbor MI 48104            
        </p>
        
        </div>
        <div className = "recent-item">
        <button>view</button>
        <p>
            06117
        </p>
   
        </div>
        <div className = "recent-item">
        <button>view</button>
        <p>
            West Hartford, CT
        </p>

        </div>
        <div className = "recent-item">
        <button>view</button>
        <p>
            Massachusetts
        </p>
        </div>
        </div>
      </div>
    );
  }
}

export default SavedSearches;