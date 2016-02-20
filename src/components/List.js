import React from 'react';
import ListItem from './ListItem';


class List = () => {
  
  const { albums } = this.props

  renderList() {
    if(albums) {
      return albums.map((album) => {
        return (
          <ListItem />
        );
      });
    }
  }

  <ul>
    {renderList()}
  </ul>
}

export default List;
