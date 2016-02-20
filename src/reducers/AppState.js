import Immutable from 'immutable';

import { GET_ARTIST } from '../actions/actions';

const INITIAL_STATE = {
  artist: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ARTIST:
      console.log(state);
      return state;
    default:
      return state;
  }
}
