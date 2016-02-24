import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
// Middleware chained in order
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
import App from './containers/app';
// State
import AppState from './reducers/AppState';
// Local Storage
import persistState from 'redux-localstorage';

const createPersistantStore = compose(persistState(null, { key: 'searches' }))(createStore);

const store = applyMiddleware(Thunk, Promise)(createPersistantStore)(AppState);



// const createStoreWithMiddleWare = applyMiddleware(Thunk, Promise)(createStore);
// const store = createStoreWithMiddleWare(AppState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
