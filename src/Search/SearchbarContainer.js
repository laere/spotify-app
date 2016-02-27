import React, { Component } from 'react';
import { connect } from 'react-redux';

import Searchbar from './Searchbar';

import {
  getArtist,
  getInput,
  getAlbums,
  getTracks,
  clearInput
} from '../actions/actions';

class SearchbarContainer extends Component {

  render() {

    const {

      searchValue, getInput, getArtist,
      getAlbums, getTracks, clearInput

    } = this.props;

    return (
    <div>
      <Searchbar
        getInput={getInput}
        getArtist={getArtist}
        getAlbums={getAlbums}
        getTracks={getTracks}
        searchValue={searchValue}
        clearInput={clearInput}
      />
  </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue
  }
}

export default connect(mapStateToProps, { getInput, getArtist, getAlbums, getTracks, clearInput } )(SearchbarContainer);
