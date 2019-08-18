import React from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {connect} from 'react-redux';
import {getSales} from './actions/saleList'

class MapContainer extends React.Component {


  constructor() {
    super();
    this.state = {
      coords: []
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
        return (
          <Marker
            key={index}
            position={
              {
                lat: lat,
                lng:lng
              }
            }
            animation={2}
          />
        )
      })
      this.setState({
        coords: markers
      })
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
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 42.364032, lng: -83.36044141186}}
          >
          {this.state.coords}
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
