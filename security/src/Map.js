import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Select from 'react-select';


const mapOptions = [
  {label: "Show All", value: 1},
  {label: "Show Blacklist", value: 2},
  {label: "Show Whitelist", value: 3},
  {label: "Narrow Time Frame", value: 4},
  {label: "Decrease Radius", value: 5},
];

const visOptions = [
  {label: "Map", value: 1},
  {label: "Street View", value: 2},
  {label: "Planet's Satellite Video", value: 3},
  {label: "Global Hawk Video", value: 4},
  {label: "Swarm Drones Video", value: 5},
  {label: "CCTV Cameras", value: 6},
];

const mapStyles = {
  width: '80%',
  height: '80%',
  display: 'flex',
  flexWrap: 'wrap'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <div className = "map-control-buttons">

        <div>
          <h5>
            Visualization 
          </h5>         
        <Select options={ visOptions } className= "selector"/>
        </div>

        <Link to = "/map-controls">
        <div>
          <h5>
            Map Controls
          </h5>
        <button className = "map-controls">
          <i className="fas fa-sliders"></i>
        </button>
        </div>
        </Link>


        {/* <Link to = "/map-filters">
        <i class="fas fa-filter"></i>
        </Link> */}

          <div>
          <h5>
            Filter
          </h5>    
          <Select options={ mapOptions } className= "selector"/>
          </div>

          <Link to = {'/location-chart'}>
          <div className = "switch-view">
          <h5>
            Switch to Chart View
          </h5>
          </div>
          </Link>

        </div>

      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 41.7621,
         lng: -72.7420
        }}
        >
        <Marker
        onClick={this.onMarkerClick}
        name={'John Doe'}
        />
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
        <div>
            <p>{this.state.selectedPlace.name}</p>
            <a href='#'>learn more</a>
        </div>
        </InfoWindow>
        </Map>

        </div>
    );
  }
}


export default GoogleApiWrapper(
  (props)=> ({
      apiKey: ('AIzaSyDmNug6tbEgfI-ooGAoUiF3ZUoL8xH0JHY')
    }
))(MapContainer);