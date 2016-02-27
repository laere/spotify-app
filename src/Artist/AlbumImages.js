import React, { Component } from 'react';

export default class AlbumImages extends Component {

  render() {

    const { albumData } = this.props;

    const albumImages = albumData.albums.items.map((album, index) => {
      //load first 5
      if(index <= 7) {
        return (
          <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-xs-12 albumImages">
            <h3 className="albumImages-Title">{album.name}</h3>
            <a href={album.external_urls.spotify} target="_blank">
              <img className="albumImages-Image" src={album.images[0].url} alt="artist album images" />
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
