import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
//Child Components
import Searchbar from '../components/Searchbar';
import List from '../components/List';
//Actions
import { getArtist, getInput } from '../actions/actions';


class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Searchbar
          getInput={this.props.getInput}
          getArtist={this.props.getArtist}
          searchValue={this.props.searchValue}
        />
        <List
          artistData={this.props.artist}
          getArtist={this.props.getArtist}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    artist: state.artist,
    searchValue: state.searchValue
  })
}

export default connect(mapStateToProps, { getArtist, getInput } )(App);
