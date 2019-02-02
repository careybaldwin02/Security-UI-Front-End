import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Dropdown from './Dropdown';
import './App.css';

class ChartControlBarPerson extends Component {
  constructor() {
    super()
    this.state = {
      visual: [

        {
          id: 0,
          title: 'Map',
          selected: false,
          key: 'visual'
        },
        {
          id: 1,
          title: 'Street View',
          selected: false,
          key: 'visual'
        },
        {
          id: 2,
          title: 'Planet\'s Satellite Video',
          selected: false,
          key: 'visual'
        },
        {
          id: 3,
          title: 'Global Hawk Video',
          selected: false,
          key: 'visual'
        },
        {
          id: 4,
          title: 'Swarm Drones Video',
          selected: false,
          key: 'visual'
        },
        {
          id: 5,
          title: 'CCTV Cameras',
          selected: false,
          key: 'visual'
        }
      ],

      filter: [
        {
          id: 0,
          title: 'Show All',
          selected: false,
          key: 'filter'
        },
        {
          id: 1,
          title: 'Show Watchlist',
          selected: false,
          key: 'filter'
        },
        {
          id: 2,
          title: 'Show Whitelist',
          selected: false,
          key: 'filter'
        },
        {
          id: 3,
          title: 'Change Time Frame',
          selected: false,
          key: 'filter'
        },
        {
          id: 4,
          title: 'Frequent Visitors',
          selected: false,
          key: 'filter'
        },
        {
          id: 5,
          title: 'Average Velocity',
          selected: false,
          key: 'filter'
        }
      ]
    }
  }


  render() {
    return (
      <div className="chart-control-bar">
        <div className="chart-control-buttons">
          <div className="chart-controls">
            <Link to="/chart-controls">
              <i className="fas fa-sliders"></i>
            </Link>
          </div>
          <div className="dropdown">
            <Dropdown
              title="Filter"
              list={this.state.filter}
            />
          </div>

        </div>
        <div className="switch-view">
          <Link to={'/person-demo'}>
            <h4>
              Toggle Map/Chart View
          </h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default ChartControlBarPerson;