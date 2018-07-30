import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import IndexPage from 'layouts/indexPage';
import Article1 from 'content/articles/onwheelArticle';

export default (
  <BrowserRouter>
    <div>
      <Route exec={true} path='/' component={IndexPage}/>
      <Route path='/article' component={Article1}/>
    </div>
  </BrowserRouter>
)