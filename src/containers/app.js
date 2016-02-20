import React from 'react';
import { Component } from 'react';

import Searchbar from '../components/Searchbar';
import List from '../components/List';

import { connect } from 'react-redux';
import { getAlbums } from '../actions/actions';



class App extends Component {

  constructor() {
    super();

  }

  componentWillMount() {
    this.props.getAlbums();
  }

  render() {

    return (
      <div>
        <Searchbar />
        <List />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return ({ albums: state.albums })
}

export default connect(mapStateToProps, { getAlbums })(App);
