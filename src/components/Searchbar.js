import React from 'react';
import { Component } from 'react';

export default class Searchbar extends Component {

  formatQuery(query) {
    return query.split(' ').join('%20');
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}
