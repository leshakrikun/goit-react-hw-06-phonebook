import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css';
import 'normalize.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store= {store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
