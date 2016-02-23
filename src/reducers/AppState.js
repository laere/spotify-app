import dotProp from 'dot-prop-immutable';

import { GET_ARTIST, GET_INPUT, GET_ALBUMS, GET_TRACKS, CLEAR_INPUT } from '../actions/actions';

const INITIAL_STATE = {
  artist: [],
  albums: [],
  tracks: [],
  searchValue: '',
  receivedArtist: false,
  receivedAlbums: false,
  receivedTracks: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ARTIST:
      state = dotProp.set(state, 'artist', action.payload.data.artists.items[0]);
      state = dotProp.set(state, 'receivedArtist', true);
      console.log(state);
      return state;
    case GET_ALBUMS:
      state = dotProp.set(state, 'albums', action.payload.data);
      state = dotProp.set(state, 'receivedAlbums', true);
      console.log(state);
      return state;
    case GET_TRACKS:
      state = dotProp.set(state, 'tracks', action.payload.data);
      state = dotProp.set(state, 'receivedTracks', true);
      console.log(state);
      return state;
    case GET_INPUT:
      state = dotProp.set(state, 'searchValue', action.payload);
      console.log(state);
      return state;
    case CLEAR_INPUT:
      state = dotProp.set(state, 'searchValue', action.payload)
      return state;
    default:
      return state;
  }
}
