import axios from 'axios';

export const GET_ALBUMS = 'GET_ALBUMS';

const BASE_URL = 'https://api.spotify.com/v1/search';

export const getAlbums = () => {
  return (dispatch, getState) => {
    const req = axios.get(BASE_URL + '?q=killswitch%20engage&type=album');

    req.then(function(response) {
        console.log(response);
        dispatch({
          type: GET_ALBUMS,
          payload: req
        });

    }, function(err) {
        console.log('Error getting data');
    });
  };
};
