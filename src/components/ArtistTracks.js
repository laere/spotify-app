import React, { Component } from 'react';

export default class ArtistTracks extends Component {

  render() {

    const { trackData } = this.props;

    const artistTracks = trackData.tracks.items.map((track, index) => {
      if(index <= 4) {
          return (
              <div key={index}>
                <a href={track.preview_url} target="_blank">{track.name}</a>
              </div>
          );
        }
    });

    return (
    <div>
      <h2>Song Previews:</h2>
      <div>{artistTracks}</div>
    </div>
    );
  }
}
