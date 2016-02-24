import React, { Component } from 'react';
import GL from 'gl-react';
import { Surface } from 'gl-react-dom';
import { Blur } from 'gl-react-blur';


export default class DisplayArtistInfo extends Component {

  render() {

    const { artistData } = this.props;

    const artistImage = artistData.images[1].url;
    const artistGenres = artistData.genres.map((genre, index) => {
      return <div key={index}>{genre}</div>
    });

    return (
      <div className="artistInfo">
        <div className="artistInfo-Image" >
          <a href={artistData.external_urls.spotify} target="_blank">
            <img src={artistImage} alt="image of the artist" />
          </a>
          <div className="artistInfo-Labels">
            <div className="artistInfo-Name">Artist:  {artistData.name}</div>
            <div className="artistInfo-Genre">Genres: {artistGenres}</div>
            <div className="artistInfo-Followers">Followers: {artistData.followers.total}</div>
          </div>
        </div>
      </div>
    );
  }
}
