import React, { Component } from 'react';

export default class AlbumImages extends Component {

  render() {

    const { albumData } = this.props;

    const albumImages = albumData.albums.items.map((album, index) => {
      //load first 5
      if(index <= 5) {
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
    // Filter array for repeated album names here
    // Pseudo Code
    // array.filter((ele, index) => {
    //   return array.indexOf(ele) === index;
    // });
    return (
      <div>
        {albumImages}
      </div>
    );
  }
}
