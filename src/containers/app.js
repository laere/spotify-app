import React, { Component } from 'react';
import { connect } from 'react-redux';
//Child Components
import Searchbar from '../components/Searchbar';
import List from '../components/List';
//Actions
import { getArtist, getInput } from '../actions/actions';


class App extends Component {
  constructor() {
    super();
  }

  render() {

    const { getInput, getArtist, searchValue, artist, received } = this.props;

    return (
      <div>

        <Searchbar
          getInput={getInput}
          getArtist={getArtist}
          searchValue={searchValue}
        />

        {received
          ? <List artistData={artist} />
          : <h1>Waiting for data....</h1>
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    artist: state.artist,
    searchValue: state.searchValue,
    received: state.received
  })
}


export default connect(mapStateToProps, { getArtist, getInput } )(App);
