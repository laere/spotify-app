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

    const { getInput, getArtist, searchValue, artist } = this.props;

    return (
      <div>
        <Searchbar
          getInput={getInput}
          getArtist={getArtist}
          searchValue={searchValue}
        />
        <List
          artistData={artist}
          getArtist={getArtist}
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
