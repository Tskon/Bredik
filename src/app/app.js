import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

require('bootstrap');

// Layouts
import Main from '~/app/layouts/main';

ReactDOM.render(
  //<Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  // </Provider>
  , document.querySelector('main'));