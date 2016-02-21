import React from 'react';
import { Component } from 'react';

import ListItem from './ListItem';


export default class List extends Component {

  constructor() {
    super();
    this.test2 = this.test2.bind(this);
    this.renderArtistImages = this.renderArtistImages.bind(this);
    // this.renderArtistGenres = this.renderArtistGenres.bind(this);
  }

  test2() {
    console.log(this.props.artistData.images[0]);
    console.log(this.props.artistData.images[0].url);
  }

  renderArtistImages() {
  if(this.props.artistData !== this.props.artistData) {
    return this.props.artistData.images.map(obj => {
        return (
          <ListItem img={obj.url} key={obj.id} />
        );
      });
    }
  }

  // renderArtistGenres() {
  //   if(this.props.artistData !== this.props.artistData) {
  //     return this.props.artistData.genres.map(genre => {
  //       return (
  //           <ListItem genre={genre} />
  //       );
  //     });
  //   }
  // }

  render() {

      let artistData = this.props.artistData;

    return (
      <div>
        <span>{artistData.name}</span>
        {/*{this.renderArtistGenres()}*/}
        {this.renderArtistImages()}
        <button onClick={this.test2}>Test2</button>
      </div>
    );
  }
}

export default List;
