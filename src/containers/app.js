import React, { Component } from 'react';
import { connect } from 'react-redux';
//Child Components
import Searchbar from '../components/Searchbar';
import DisplayArtistInfo from '../components/DisplayArtistInfo';
import AlbumImages from '../components/AlbumImages';
//Actions
import { getArtist, getInput, getAlbums } from '../actions/actions';

class App extends Component {

  render() {
    const {
            getInput, getArtist, getAlbums,
            searchValue, artist, albums,
            receivedArtist, receivedAlbums

          } = this.props;

    return (
      <div>
        <Searchbar
          getInput={getInput}
          getArtist={getArtist}
          getAlbums={getAlbums}
          searchValue={searchValue}
        />
        {/*Wait for user to search*/}
        {receivedArtist
          ? <DisplayArtistInfo artistData={artist} />
          : <h1>Waiting for Artist data....</h1>
        }
        {receivedAlbums
          ? <AlbumImages albumData={albums} />
          : <h1>Waiting for Album data....</h1>
        }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    artist: state.artist,
    albums: state.albums,
    searchValue: state.searchValue,
    receivedArtist: state.receivedArtist,
    receivedAlbums: state.receivedAlbums
  });
}

export default connect(mapStateToProps, { getArtist, getInput, getAlbums } )(App);
