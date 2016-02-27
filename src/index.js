import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
// Middleware chained in order
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// Containers
import Main from './containers/Main';
// State
import AppState from './reducers/AppState';
// Local Storage
import persistState from 'redux-localstorage';

// What state will persist
const createPersistantStore = compose(persistState(
[
  'artist',
  'albums',
  'tracks',
  'receivedArtist',
  'receivedAlbums',
  'receivedTracks'
],
{ key: 'searches' }))(createStore);

const store = applyMiddleware(Thunk, Promise)(createPersistantStore)(AppState);

// const createStoreWithMiddleWare = applyMiddleware(Thunk, Promise)(createStore);
// const store = createStoreWithMiddleWare(AppState);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  , document.querySelector('.container'));
