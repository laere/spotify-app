import React, { Component } from 'react';
import { connect } from 'react-redux';
//Child Components
import Searchbar from '../components/Searchbar';
import DisplayArtistInfo from '../components/DisplayArtistInfo';
import AlbumImages from '../components/AlbumImages';
//Actions
import { getArtist, getInput, getAlbums } from '../actions/actions';


class App extends Component {
  constructor() {
    super();
  }

  render() {

    const { getInput, getArtist, getAlbums, searchValue, artist, received } = this.props;

    return (
      <div>

        <Searchbar
          getInput={getInput}
          getArtist={getArtist}
          getAlbums={getAlbums}
          searchValue={searchValue}
        />
        {/*Wait for user to search*/}
        {receive
          ? <div><DisplayArtistInfo artistData={artist} /><AlbumImages /></div>
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


export default connect(mapStateToProps, { getArtist, getInput, getAlbums } )(App);
