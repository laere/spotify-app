import dotProp from 'dot-prop-immutable';

import { GET_ARTIST, GET_INPUT, GET_ALBUMS } from '../actions/actions';

const INITIAL_STATE = {
  artist: [],
  albums: [],
  searchValue: '',
  received: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ARTIST:
      state = dotProp.set(state, 'artist', action.payload.data.artists.items[0]);
      state = dotProp.set(state, 'received', true);
      console.log(state);
      return state;
    case GET_ALBUMS:
      state = dotProp.set(state, 'albums', action.payload.data);
      console.log(state);
      return state;
    case GET_INPUT:
      state = dotProp.set(state, 'searchValue', action.payload);
      console.log(state);
      return state;
    default:
      return state;
  }
}
