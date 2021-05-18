import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './firebase';

const store = createStore(
  {}, // todos los reducers
  {}, // estados iniciales
);

ReactDOM.render(<App />, document.getElementById('app'));
