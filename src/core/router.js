import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import Header from 'common/blocks/header';
import SideMenu from 'common/blocks/sideMenu';

export default (
  <BrowserRouter>
    <div>
      <Route path='/' component={Header}/>
      <Route path='/' component={SideMenu}/>
    </div>
  </BrowserRouter>
)