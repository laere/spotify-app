import React, { Component } from 'react';

export default class AlbumImages extends Component {

  constructor() {
    super();

    this.test = this.test.bind(this);
  }

  test() {
    console.log(this.props.albumData.albums.items);
  }

  render() {

    const { albumData } = this.props;

    const albumArray = albumData.albums.items;
    const albumImages = albumArray.map((album, index) => {
      if(index <= 4) {
        return (
          <div key={index}>
            <h3>{album.name}</h3>
            <a href={album.external_urls.spotify}>
              <img src={album.images[0].url} alt="artist album images"/>
            </a>
          </div>
        );
      }
    });
    //Filter array for repeated album names here

    //
    return (
      <div>
        {albumImages}
        <button onClick={this.test}>Test</button>
      </div>
    );
  }
}

export default AlbumImages;
