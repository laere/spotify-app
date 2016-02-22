import React, { Component } from 'react';

// import ListItem from './ListItem';

export default class DisplayArtistInfo extends Component {

  constructor() {
    super();

    this.test2 = this.test2.bind(this);
  }

  test2() {
    const { artistData } = this.props;
    // console.log(artistData.genres[0]);
    console.log(artistData.genres);
  }

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
          <img src={artistImage} />
          <button onClick={this.test2}>Test2</button>
        </div>
      );
  }
}
