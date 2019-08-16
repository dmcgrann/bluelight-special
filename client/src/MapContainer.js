import React from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {connect} from 'react-redux';

class MapContainer extends React.Component {


  displayMarkers = () => {
    const {sales} = this.props
    return sales.map((sale, index) => {
      const saleString = sale.attributes.address.replace(/\s/g, '_')
      console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=${saleString}&key=""`)
    })
    //   return <Marker key={index} id={index} results={`https://maps.googleapis.com/maps/api/geocode/json?address=${sale.attributes.address}&key=AIzaSyB3Gda60EZKyHwzvuqE1nSMO28ZIxAwSVQ`}
    //
    //  onClick={() => console.log("You clicked me!")} />
    // })
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

const mapStateToProps = state => {
  return {
    sales: state.saleList
  }
}

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ""
})(MapContainer))
