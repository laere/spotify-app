import React, { Component } from 'react';

export default class Follow extends Component {
  render() {

    const { followed, handleFollowClick } = this.props;


    return (
      <div
        className="follow"
        style={{backgroundColor: followed ? 'red' : 'green'}}
        onClick={handleFollowClick}>

        Follow

      </div>
    );
  }
}
