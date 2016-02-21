import Immutable from 'immutable';
import dotProp from 'dot-prop-immutable';

import { GET_ARTIST, INPUT_CHANGE } from '../actions/actions';

const INITIAL_STATE = {
  artist: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ARTIST:
      state = dotProp.set(state, 'artist', action.payload);
      return state;
    case INPUT_CHANGE:

    default:
      return state;
  }
}
