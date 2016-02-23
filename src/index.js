import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
//  Middleware chained in order
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';

import App from './containers/app';
import AppState from './reducers/AppState';

import persistState from 'redux-localstorage';

const createPersistantStore = compose(persistState(null, { key: 'searches' }))(createStore);

const store = applyMiddleware(Thunk, Promise)(createPersistantStore)(AppState);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
