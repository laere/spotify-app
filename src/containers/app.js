import React from 'react';
import { Component } from 'react';

import Searchbar from '../components/Searchbar';
import List from '../components/List';

import { connect } from 'react-redux';



class App extends Component {

  render() {
    return (
      <div>
        <Searchbar />
        <List/>
      </div>
    );
  }

}


export default App;
