import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//Middleware chained in order
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';

import App from './containers/app';
import AppState from './reducers/AppState';

const createStoreWithMiddleware = applyMiddleware(Thunk, Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(AppState)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
