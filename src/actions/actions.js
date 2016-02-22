import axios from 'axios';

//action types
export const GET_ARTIST = 'GET_ARTIST';
export const GET_INPUT = 'GET_INPUT';
export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_TRACKS = 'GET_TRACKS';

//other constants
const BASE_URL = 'https://api.spotify.com/v1/search';

// ARTISTS
export const getArtist = (searchValue) => {

  return (dispatch, getState) => {
    const request = axios.get(`${BASE_URL}?q=${searchValue}&type=artist`);

    request.then(function(response) {
      console.log(response);
      dispatch({
        type: GET_ARTIST,
        payload: request
      });

    }, function(err) {
      console.log('Error loading data');
    });
  };
};

// ALBUMS
export const getAlbums = (searchValue) => {
  return (dispatch, getState) => {
    const request = axios.get(`${BASE_URL}?q=${searchValue}&type=album`);

    request.then(function(response) {
      console.log(response);
      dispatch({
        type: GET_ALBUMS,
        payload: request
      });

    }, function(err) {
      console.log('Error loading data');
    });
  };
};

export const getTracks = (searchValue) => {
  return (dispatch, getState) => {
    const request = axios.get(`${BASE_URL}?q=${searchValue}&type=track`);

    request.then(function(response) {
      console.log(response);
      dispatch({
        type: GET_TRACKS,
        payload: request
      });

    }, function(err) {
      console.log('Error loading data');
    });
  };
};

// SEARCH INPUT
export const getInput = (input) => {
  return {
    type: GET_INPUT,
    payload: input
  }
}
