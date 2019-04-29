import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './reducers';
import App from './App';
import './styles/index.css';

const store = createStore(combineReducers);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
