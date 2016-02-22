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
    console.log(artistData.images[0]);
  }



  render() {

    const { artistData } = this.props;
    const artistImage = artistData.images[1].url;

      return (
        <div>
          <ListItem name={artistData.name} />
          <img src={artistImage} />
          <button onClick={this.test2}>Test2</button>
        </div>
      );
  }
}
