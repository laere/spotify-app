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
    const { searchValue, clearInput } = this.props;
    clearInput()
  }

  render() {
    const { searchValue } = this.props;

    return (
      <div className="navBar">
        <form onSubmit={this.handleOnSubmit} className="form-inline">
          <div className="form-group">
            <input className="navBarInput" type="text" onChange={this.handleOnChange} value={searchValue} placeholder="Search your for your favorite artist..."/>
            <button className="navBarButton Search" >Search</button>
            <button className="navBarButton Clear" onClick={this.clear}>Clear</button>
          </div>
        </form>
      </div>
    );
  }
}
