import Immutable from 'immutable';


import { actions } from './actions/actions';

const initialState = {
  albums: []
};


export const AppState(state = initialState, action) {
  switch(action.type) {
    case GET_ALBUMS:
      return state;
    default:
      return state;
  }
}
