import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
//Child Components
import Searchbar from '../components/Searchbar';
import List from '../components/List';
//Actions
import { getArtist } from '../actions/actions';



class App extends Component {

  constructor() {
    super();

  }

  componentWillMount() {
    this.props.getArtist();
  }

  render() {

    return (
      <div>
        <Searchbar />
        <List

          />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return ({ artist: state.artist })
}

export default connect(mapStateToProps, { getArtist })(App);
