import React, { Component } from 'react';
import { connect } from 'react-redux';
//Child Components
import Searchbar from '../components/Searchbar';
import DisplayArtistInfo from '../components/DisplayArtistInfo';
//Actions
import { getArtist, getInput } from '../actions/actions';


class App extends Component {
  constructor() {
    super();
  }

  render() {

    const { getInput, getArtist, searchValue, artist, received } = this.props;

    return (
      <div>
        <Searchbar
          getInput={getInput}
          getArtist={getArtist}
          searchValue={searchValue}
        />

        {received
          ? <DisplayArtistInfo artistData={artist} />
          : <h1>Waiting for data....</h1>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    artist: state.artist,
    searchValue: state.searchValue,
    received: state.received
  })
}


export default connect(mapStateToProps, { getArtist, getInput } )(App);
