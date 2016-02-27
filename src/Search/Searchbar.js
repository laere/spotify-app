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

    getInput(e.target.value);
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
    const { searchValue, clearInput } = this.props;
    clearInput()
  }

  render() {
    const { searchValue } = this.props;

    return (
      <div className="search fluid-container">
        <h1 className="pageTitle">Zeal</h1>
        <form onSubmit={this.handleOnSubmit} className="form-inline">
          <div>
            <input className="searchInput" type="text" onChange={this.handleOnChange} value={searchValue} placeholder="Search for your favorite artist..."/>
            <button className="searchButton" >Search</button>
            <button className="searchButton" onClick={this.clear}>Clear</button>
          </div>
        </form>
      </div>
    );
  }
}

// Searchbar.propTypes = {
//   searchValue: React.PropTypes.string.isRequired,
//   getArtist: React.PropTypes.func.isRequired,
//   getAlbums: React.PropTypes.func.isRequired,
//   getTracks: React.PropTypes.func.isRequired,
//   clearInput: React.PropTypes.func.isRequired
// };
