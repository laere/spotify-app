import axios from 'axios';

//action types
export const GET_ARTIST = 'GET_ARTIST';

//other constants
const BASE_URL = 'https://api.spotify.com/v1/search';

// export const getArtist = () => {
//   return (dispatch, getState) => {
//   const request = axios.get(`${BASE_URL}?q=killswitch%20engage&type=artist`);
//
//     request.then(function(response) {
//       console.log(response);
//
//       dispatch({
//         type: GET_ARTIST,
//         payload: request
//       });
//
//       }, function(err) {
//         console.log('Error loading data');
//       });
//   };
// };

export const getArtist = () => {
  const request = axios.get(`${BASE_URL}?q=killswitch%20engage&type=artist`);
  return {
    type: GET_ARTIST,
    payload: request
  }
}
