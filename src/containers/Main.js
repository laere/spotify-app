import React, { Component } from 'react';

import ArtistContainer from '../Artist/ArtistContainer';
import SearchbarContainer from '../Search/SearchbarContainer';


export default class Main extends Component {
  render() {
    return (
      <div>
        <SearchbarContainer />
        <ArtistContainer />
      </div>
    );
  }
}
