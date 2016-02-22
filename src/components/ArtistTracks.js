import React, { Component } from 'react';

export default class ArtistTracks extends Component {

  constructor() {
    super()

    this.test = this.test.bind(this);
  }

  test() {

    const { trackData } = this.props;
    console.log(trackData);
  }

  render() {
    return (
    <div>
      <h1>Hello</h1>
      <button onClick={this.test}>Test</button>
    </div>
    );
  }
}
