import React from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {connect} from 'react-redux';
import {getSales} from './actions/saleList'

class MapContainer extends React.Component {


  constructor() {
    super();
    this.state = {
      coords: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  componentDidMount = () => {
    const {sales} = this.props
    const coordinates = sales.map(sale => {
      const convert = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${sale.attributes.address}&key=`)
        .then(r=>r.json())
      return convert
    })
    Promise.all(coordinates).then(locations => {
      const markers = locations.map((place,index) => {
        const lat = place.results[0].geometry.location.lat;
        const lng = place.results[0].geometry.location.lng;
        const address = place.results[0].formatted_address;
        return (
          <Marker
            onClick={this.onMarkerClick}
            key={index}
            position={
              {
                lat: lat,
                lng:lng
              }
            }
            animation={2}
            address={address}
          />
        )
      })
      this.setState({
        coords: markers
      })
    })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 42.364032, lng: -83.36044141186}}
          >
          {this.state.coords}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <p>{this.state.selectedPlace.address}</p>
              </div>
          </InfoWindow>

      </Map>

    )
  }
}

const mapStateToProps = state => {
  return {
    sales: state.saleList
  }
}

export default connect(mapStateToProps, {getSales})(GoogleApiWrapper({
  apiKey: ""
})(MapContainer))
