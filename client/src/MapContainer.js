import React from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {connect} from 'react-redux';

class MapContainer extends React.Component {


  displayMarkers = () => {
    const {sales} = this.props
    return sales.map((sale, index) => {
      // const saleString = sale.attributes.address.replace(/\s/g, '_')
      const coords = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${sale.attributes.address}&key=`)
        .then(r=>r.json())
        .then(p=> p.results[0].geometry.location)
      console.log({coords})
      return <Marker key={index} id={index} position={{coords}}/>
    })

  }

  render() {
    const {sales} = this.props
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

const mapStateToProps = state => {
  return {
    sales: state.saleList
  }
}

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ""
})(MapContainer))
