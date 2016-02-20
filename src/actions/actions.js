import axios from 'axios';

const GET_ALBUMS = 'GET_ALBUMS';

export const actions = {
  GetAlbums: GetAlbums
}

const GetAlbums = (query) => {
  var req = axios.get();
  return {
    type: GET_ALBUMS,
    payload: req
  }
}
