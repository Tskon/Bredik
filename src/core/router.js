import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import Header from '../common/blocks/header';

export default (
  <BrowserRouter>
    <div>
      <Route path='/' component={Header}/>
      <Route path='/' component={Header}/>
    </div>
  </BrowserRouter>
)