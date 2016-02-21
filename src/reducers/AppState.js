import Immutable from 'immutable';
import dotProp from 'dot-prop-immutable';

import { GET_ARTIST, INPUT_CHANGE } from '../actions/actions';

const INITIAL_STATE = {
  artist: [],
  searchValue: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ARTIST:
      state = dotProp.set(state, 'artist', action.payload.data.artists.items[0]);
      console.log(state);
      return state;
    case INPUT_CHANGE:
      state = dotProp.set(state, 'searchValue', action.payload);
      console.log(state);
      return state;
    default:
      return state;
  }
}
