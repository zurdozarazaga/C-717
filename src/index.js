import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import './firebase';

const store = createStore(
  reducers, // todos los reducers
  {}, // estados iniciales
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
