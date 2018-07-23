import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import IndexPage from 'layouts/indePage';

export default (
  <BrowserRouter>
    <div>
      <Route path='/' component={IndexPage}/>
    </div>
  </BrowserRouter>
)