import React, { Component } from 'react';

export default class Follow extends Component {

  render() {

    const { followed, handleFollowClick } = this.props;

    const followColor = followed ? '#999' : '#333';
    const followText = followed ? 'Following' : 'Follow';

    return (
      <input
        type="submit"
        className="follow"
        onClick={handleFollowClick}
        style={{backgroundColor: followColor}}
        value={followText}
        />
    );
  }
}
