import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import NavBar from './NavBar';


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
    );
  }
}


export default GoogleApiWrapper(
  (props)=> ({
      apiKey: process.env.API_KEY
    }
))(MapContainer);