import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import Promise from 'redux-promise-middleware';


import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Think)(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
