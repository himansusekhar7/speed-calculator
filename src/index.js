import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';
import './styles/index.scss';

const store = createStore(rootReducer);
console.log(store.getState());

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
