import React, { Component } from 'react';
import ListItem from './ListItem';
import ArtistImages from './ArtistImages';

export default class List extends Component {

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
          <div>Name:
            <ListItem name={artistData.name} />
          </div>
          <div>Genres: {artistGenres}</div>
          <img src={artistImage} />
          <button onClick={this.test2}>Test2</button>
        </div>
      );
  }
}
