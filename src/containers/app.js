import React, { Component } from 'react';
import { connect } from 'react-redux';
//  SCSS
// import '../scss/main.scss';
//  Child Components
import Searchbar from '../components/Searchbar';
import DisplayArtistInfo from '../components/DisplayArtistInfo';
import AlbumImages from '../components/AlbumImages';
import ArtistTracks from '../components/ArtistTracks';
//  Actions
import { getArtist, getInput, getAlbums, getTracks, clearInput } from '../actions/actions';


class App extends Component {

  render() {

    const {
            getInput, getArtist, getAlbums,
            searchValue, artist, albums,
            receivedArtist, receivedAlbums, tracks,
            receivedTracks, getTracks, clearInput

          } = this.props;

    return (
      <div>
        <Searchbar
          getInput={getInput}
          getArtist={getArtist}
          getAlbums={getAlbums}
          getTracks={getTracks}
          searchValue={searchValue}
          clearInput={clearInput}
        />
        {/*Wait for user to search*/}
        {/*Find a better way to do this
        if all 3 stat arrs.length <= 0 then run a loading data func*/}
        {receivedArtist
          ? <DisplayArtistInfo artistData={artist} />
          : <h1>Waiting for Artist data....</h1>
        }
        {receivedTracks
          ? <ArtistTracks trackData={tracks}/>
          : <h1>Waiting for Track data....</h1>
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
    tracks: state.tracks,
    searchValue: state.searchValue,
    receivedArtist: state.receivedArtist,
    receivedAlbums: state.receivedAlbums,
    receivedTracks: state.receivedTracks,
  });
}

export default connect(mapStateToProps, { getArtist, getInput, getAlbums, getTracks, clearInput } )(App);
