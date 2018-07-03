import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import SideMap from './side_map.jsx';
import flats from '../flat.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {flats: flats, selectedFlat: null}
  }

  upDateFlatSelection = (id) => {
    this.setState({selectedFlat: id});
  }

  render() {
    return(
      <div>
        <FlatList flats = {this.state.flats} FlatSelection = {this.upDateFlatSelection} />
        <SideMap flats = {this.state.flats} selectedFlat = {this.state.selectedFlat} />
      </div>
    );
  }
}

export default App;
