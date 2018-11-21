import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

import './App.css';


class RecentSearches extends Component {
  render() {
    return (
    <div className = "container">
            <NavBar />
      <div className="recent">
        <div className = "recent-item">
        <button>view</button>
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

export default RecentSearches;