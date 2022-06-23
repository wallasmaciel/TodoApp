import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise'; // Verifica nos payloads das actions se é uma promise
import multi from 'redux-multi'; // Executar outra action após o final e uma outra 
import thunk from 'redux-thunk';

import App from './main/app';
import Reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
  <Provider store={ applyMiddleware(thunk, multi, promise)(createStore)(Reducers, devTools) }>
    <App />
  </Provider>, 
  document.getElementById('app')
);
