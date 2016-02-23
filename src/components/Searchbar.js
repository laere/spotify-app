import React, { Component } from 'react';

export default class Searchbar extends Component {

  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleOnChange(e) {
    const { getInput } = this.props;

    this.props.getInput(e.target.value);
  }

  handleOnSubmit(e) {

    e.preventDefault();
    const { searchValue, getArtist, getAlbums, getTracks } = this.props;

    if(searchValue === '') return;

    getArtist(searchValue);
    getAlbums(searchValue);
    getTracks(searchValue);
  }

  clear() {
    const { searchValue } = this.props;
    searchValue === '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange}/>
          <button>Search</button>
          <button onClick={this.clear}>Clear</button>
        </form>
      </div>
    );
  }
}
