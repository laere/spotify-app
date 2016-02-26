import React, { Component } from 'react';

export default class Follow extends Component {
  render() {

    const { followed, handleFollowClick } = this.props;

    return (
      <input
        className="follow"
        onClick={handleFollowClick}
        style={{backgroundColor: followed ? 'red' : 'green'}}
        value={followed ? 'Following' : 'Follow'}
        />
    );
  }
}
