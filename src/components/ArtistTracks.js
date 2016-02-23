import React, { Component } from 'react';

export default class ArtistTracks extends Component {

  constructor() {
    super()

    this.test = this.test.bind(this);
  }

  test() {

    const { trackData } = this.props;
    console.log(trackData);
  }

  render() {

    const { trackData } = this.props;

    const artistTracks = trackData.tracks.items.map((track, index) => {
      if(index <= 4) {
          return (
              <div key={index}>
                <a href={track.preview_url}>{track.name}</a>
              </div>
          );
        }
    });

    return (
    <div>
      <h2>Song Previews:</h2>
      <div>{artistTracks}</div>
      <button onClick={this.test}>Test</button>
    </div>
    );
  }
}
