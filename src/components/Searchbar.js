import React from 'react';
import { Component } from 'react';

export default class Searchbar extends Component {

  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    let value = e.target.value;
    let formattedValue = value.split(' ').join('%20');
    this.props.getInput(value);
  }

  render() {
    return (
      <div>
        <form >
          <input type="text" onChange={this.handleOnChange}/>
          <button >Search</button>
        </form>
      </div>
    );
  }
}
