import React, { Component } from 'react';
import { connect } from 'react-redux';
//  SCSS
// import '../scss/main.scss';
//  Child Components
import ArtistInfo from './ArtistInfo';
import AlbumImages from './AlbumImages';
import ArtistTracks from './ArtistTracks';
//  Actions
import { follow } from '../actions/actions';


class ArtistContainer extends Component {

  constructor(props) {
    super(props);
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }

  handleFollowClick(e) {
    const { follow } = this.props;
    follow();
  }

  render() {
    const {
            artist, albums, follow, playlist,
            receivedArtist, receivedAlbums, tracks,
            receivedTracks, followed, handleFollowClick

          } = this.props;

    return (
      <div>

        {/*Wait for user to search*/}
        {/*Find a better way to do this
        if all 3 stat arrs.length <= 0 then run a loading data func*/}
        {receivedArtist
          ? <ArtistInfo
              artistData={artist}
              followed={followed}
              handleFollowClick={this.handleFollowClick}
            />
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
    receivedArtist: state.receivedArtist,
    receivedAlbums: state.receivedAlbums,
    receivedTracks: state.receivedTracks,
    followed: state.followed,
    playlist: state.playlist
  });
}


export default connect(mapStateToProps, { follow } )(ArtistContainer);
