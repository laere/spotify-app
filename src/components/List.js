import React, { Component } from 'react';
import ListItem from './ListItem';


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

      return (
        <div>
          <ListItem name={artistData.name} />
          <ListItem genres={artistData.genres} />
          <ListItem image={artistData.images} />
          <ListItem followers={artistData.followers} />
          <button onClick={this.test2}>Test2</button>
        </div>
      );
  }
}
