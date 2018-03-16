import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

require('bootstrap');

// Layouts
import Main from './layouts/main';

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
  , document.querySelector('main'));