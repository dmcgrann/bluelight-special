import React from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {connect} from 'react-redux';

class MapContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stores: [{latitude: 42.367349, longitude: -83.359542},
              {latitude: 42.3673398, longitude: -83.3609695},
              {latitude: 42.365660, longitude: -83.360767}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {

    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 42.364032, lng: -83.36044141186}}
          >
          {this.displayMarkers()}
      </Map>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer)
