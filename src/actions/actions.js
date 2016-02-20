import axios from 'axios';

export const GET_ARTIST = 'GET_ARTIST';

const BASE_URL = 'https://api.spotify.com/v1/search';

export const getArtist = () => {
  return (dispatch, getState) => {
    const req = axios.get(BASE_URL + '?q=killswitch%20engage&type=artist');

    req.then(function(response) {
        console.log(response);

        dispatch({
          type: GET_ARTIST,
          payload: req
        });

    }, function(err) {
        console.log('Error getting data');
    });
  };
};
