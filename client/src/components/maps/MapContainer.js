import React from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {connect} from 'react-redux';
import {getSales} from '../../actions/saleList'

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

  componentDidMount(){
    const markers = this.props.sales.map((sale,index) => {
      return(
      <Marker
        onClick={this.onMarkerClick}
        key={index}
        address={sale.attributes.address}
        position={
          {
            lat: sale.attributes.latitude,
            lng: sale.attributes.longitude
          }
        }
        animation={2}
      />
      )
    })
    this.setState({
        coords: markers
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
