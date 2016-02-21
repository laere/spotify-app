import React from 'react';
import { Component } from 'react';

import ListItem from './ListItem';


export default class List extends Component {

  constructor() {
    super();

    this.renderData = this.renderData.bind(this);
  }


  renderData() {


  }

  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    );
  }
}

export default List;
