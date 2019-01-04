import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Dropdown from './Dropdown';

class MapControlBar extends Component {
    constructor(){
    super()
    this.state = {
      visual: [

        // const visOptions = [
//   {label: "Map", value: 1},
//   {label: "Street View", value: 2},
//   {label: "Planet's Satellite Video", value: 3},
//   {label: "Global Hawk Video", value: 4},
//   {label: "Swarm Drones Video", value: 5},
//   {label: "CCTV Cameras", value: 6},
// ];
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
      ]
    }
  }

//   toggleSelected = (id, key) => {
//     let temp = JSON.parse(JSON.stringify(this.state[key]))
//     temp[id].selected = !temp[id].selected
//     this.setState({
//       [key]: temp
//     })
//   }

//   resetThenSet = (id, key) => {
//     let temp = JSON.parse(JSON.stringify(this.state[key]))
//     temp.forEach(item => item.selected = false);
//     temp[id].selected = true;
//     this.setState({
//       [key]: temp
//     })
//   }

  render() {
    return (
        <div className="map-control-bar">
         <Dropdown
            title="Select Visualization"
            list={this.state.visual}
          />
          <Dropdown
            title = "Filter View"
            list={this.state.view}
          />
        </div>
    );
  }
}



// const mapOptions = [
//   {label: "Show All", value: 1},
//   {label: "Show Blacklist", value: 2},
//   {label: "Show Whitelist", value: 3},
//   {label: "Narrow Time Frame", value: 4},
//   {label: "Decrease Radius", value: 5},
// ];

// const visOptions = [
//   {label: "Map", value: 1},
//   {label: "Street View", value: 2},
//   {label: "Planet's Satellite Video", value: 3},
//   {label: "Global Hawk Video", value: 4},
//   {label: "Swarm Drones Video", value: 5},
//   {label: "CCTV Cameras", value: 6},
// ];

// <div className = "container">
// <div className = "map-control-buttons">

// <div>
//   <h5>
//     Visualization 
//   </h5>         
// <Select options={ visOptions } className= "selector"/>
// </div>

// <div>
// <Link to = "/map-controls">
//   <h4>
//     Map Controls
//   </h4>
// <button className = "map-controls">
//   <i className="fas fa-sliders"></i>
// </button>
// </Link>
// </div>

//   <div>
//   <h4>
//     Filter
//   </h4>    
//   <Select options={ mapOptions } className= "selector"/>
//   </div>


//   <div className = "switch-view">
//   <Link to = {'/location-chart'}>
//   <h4>
//     Switch to Chart View
//   </h4>
//   </Link>
//   </div>
// </div>
// </div>
// )}
// };

export default MapControlBar;