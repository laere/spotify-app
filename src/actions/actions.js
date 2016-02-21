import axios from 'axios';

//action types
export const GET_ARTIST = 'GET_ARTIST';
export const GET_INPUT = 'GET_INPUT';


//other constants
const BASE_URL = 'https://api.spotify.com/v1/search';

  //make sure to add query eventually
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

export const getInput = (input) => {
  return {
    type: GET_INPUT,
    payload: input
  }
}
