import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import IndexPage from 'layouts/indexPage';
import Article1 from 'content/articles/onwheelArticle';
import Article2 from 'content/articles/mutationObserver';

export default (
  <BrowserRouter>
    <div>
      <Route path='/article1' component={Article1}/>
      <Route path='/article2' component={Article2}/>
      <Route exec={true} path='/' component={IndexPage}/>
    </div>
  </BrowserRouter>
)