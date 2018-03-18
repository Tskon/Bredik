import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';

require('bootstrap');

// Layouts
import Main from './layouts/main';

ReactDOM.render(
  //<Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  // </Provider>
  , document.querySelector('main'));