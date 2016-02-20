import Immutable from 'immutable';

import { GET_ALBUMS } from '../actions/actions';

const INITIAL_STATE = {
  albums: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALBUMS:
      return state;
    default:
      return state;
  }
}
