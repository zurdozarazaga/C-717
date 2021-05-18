import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './firebase';

ReactDOM.render(<App />, document.getElementById('app'));
