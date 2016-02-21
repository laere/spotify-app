import React from 'react';
import { Component } from 'react';

export default class Searchbar extends Component {

  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    let value = e.target.value;
    this.props.getInput(value);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    if(this.props.searchValue === '') return;
    this.props.getArtist(this.props.searchValue);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange}/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}
