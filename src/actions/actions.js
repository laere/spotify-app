import axios from 'axios';

export const GET_ALBUMS = 'GET_ALBUMS';

export const GetAlbums = (query) => {
  var req = axios.get();
  return {
    type: GET_ALBUMS,
    payload: req
  }
}
