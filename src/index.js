import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';

import api from './middleware/api';
import rootReducer from './reducers';
import InitialState from './InitialState';

let store = createStore(
  rootReducer,
  InitialState,
  compose(
    applyMiddleware(thunk, api, createLogger()),
    DevTools.instrument()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
