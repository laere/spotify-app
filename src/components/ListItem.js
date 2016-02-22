import React, { Component } from 'react';

export default class ListItem extends Component {
  
  render() {

    const { name, genres, image } = this.props;

    return (
      <div>
        <div>{name}</div>
        <div>{genres}</div>
        <img src={image} />
      </div>
    );
  }
}
