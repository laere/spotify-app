import React, { Component } from 'react';

export default class DisplayArtistInfo extends Component {

  render() {

    const { artistData } = this.props;

    const artistImage = artistData.images[1].url;
    const artistGenres = artistData.genres.map((genre, index) => {
      return <div key={index}>{genre}</div>
    });

    return (
      <div>
        <div>Name:  {artistData.name}</div>
        <div>Genres: {artistGenres}</div>
        <div>Followers: {artistData.followers.total}</div>
        <a href={artistData.external_urls.spotify} target="_blank">
          <img src={artistImage} alt="image of the artist" />
        </a>
      </div>
    );
  }
}
