import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    return(
      <div className = "flat-list">
        {this.props.flats.map(flat => {
          return <Flat currentFlat = {flat} key = {flat.name} FlatSelection = {this.props.FlatSelection}/>
        })}
      </div>
    );
  }
}

export default FlatList;
