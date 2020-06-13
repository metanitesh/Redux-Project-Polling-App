import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import indexReducer from './reducers/indexReducer';
import indexMiddleware from './middleware';
import App from './App';
import './index.css';

const store = createStore(indexReducer, indexMiddleware);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
