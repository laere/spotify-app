import React from 'react';
import { Component } from 'react';

export default class Searchbar extends Component {

  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  // formatQuery(query) {
  //   return query.split(' ').join('%20');
  // }

  handleOnChange(e) {
    this.props.inputChange(e.target.value);
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onFocus={this.handleOnChange} />
          <button>Search</button>
        </form>
      </div>
    );
  }
}
