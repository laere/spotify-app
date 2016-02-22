import React, { Component } from 'react';

export default class ListItem extends Component {

  render() {

    const { name } = this.props;

    return (
      <div>
        <div>{name}</div>
      </div>
    );
  }
}
