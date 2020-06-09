import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import indexReducer from './reducers/index';
import indexMiddleware from './middleware/index';
import App from './App';

const store = createStore(indexReducer, indexMiddleware);
window.store = store;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
