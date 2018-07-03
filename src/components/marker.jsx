import React, { Component } from 'react';

class Marker extends Component {

  classMarker(){
    let classes = 'marker'
    if (this.props.selectedFlat === this.props.name) {
      classes += ' hightlight-marker';
    }
    return classes;
  }


  render() {
    return(
      <div className={this.classMarker()}></div>
    );
  }
}

export default Marker;
