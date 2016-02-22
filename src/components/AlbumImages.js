import React, { Component, PropTypes } from 'react';

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
      return <img src={album.images[0].url} key={index} />
    });

    return (
      <div>
        {albumImages}
        <button onClick={this.test}>Test</button>
      </div>
    );
  }
}



export default AlbumImages;
