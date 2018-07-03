import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker.jsx';

class SideMap extends Component {

  static defaultProps = {
    center: {
      lat: 48.864716,
      lng: 2.349014
    },
    zoom: 12
  };

  render() {
    return(
      <div className="map-container">
        <GoogleMapReact
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
          {this.props.flats.map(flat => {
            return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} key={flat.name} name={flat.name} selectedFlat = {this.props.selectedFlat}/>
          })}

        </GoogleMapReact>
      </div>
    );
  }
}

export default SideMap;
