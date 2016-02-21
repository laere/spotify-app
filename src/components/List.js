import React from 'react';
import { Component } from 'react';

// import ListItem from './ListItem';


export default class List extends Component {

  constructor() {
    super();
    this.test2 = this.test2.bind(this);

  }

  test2() {
    console.log(this.props.artistData);
  }

  render() {

      let artistData = this.props.artistData;

    return (
    <div>
      <span>{artistData.name}</span>
      <button onClick={this.test2}>Test2</button>
    </div>
    );
  }
}

export default List;
