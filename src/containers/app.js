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

    this.test = this.test.bind(this);
  }

  componentWillMount() {
    this.props.getArtist();
  }

  test() {
    console.log(this.props.artist);
  }

  render() {
    console.log(this.props.artist);
    return (
      <div>
        <Searchbar />
        <List/>
        <button onClick={this.test}>Test</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    artist: state.artist
  })
}

export default connect(mapStateToProps, { getArtist })(App);
