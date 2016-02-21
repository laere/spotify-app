import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
//Child Components
import Searchbar from '../components/Searchbar';
import List from '../components/List';
//Actions
import { getArtist, inputChange } from '../actions/actions';


class App extends Component {

  constructor() {
    super();

    this.test = this.test.bind(this);
  }

  componentWillMount() {
    this.props.getArtist();
  }

  test() {
    console.log(this.props.artist);
    console.log(this.props.searchValue);
    console.log(this.props.inputChange);
  }

  render() {
    return (
      <div>
        <Searchbar
          searchValue={this.props.searchValue}
          inputChange={this.props.inputChange}
        />
        <List
          artistData={this.props.artist}
        />
        <button onClick={this.test}>Test</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    artist: state.artist,
    searchValue: state.searchValue
  })
}

export default connect(mapStateToProps, { getArtist, inputChange } )(App);
