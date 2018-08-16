import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import IndexPage from 'layouts/indexPage';
import OnWheelArticle from 'content/articles/onwheelArticle';
import MutationObserverArticle from 'content/articles/mutationObserver';

export default (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={IndexPage}/>
      <Route path='/article1' render={() => { return setIndexContent(<OnWheelArticle/>) }}/>
      <Route path='/article2' render={() => { return setIndexContent(<MutationObserverArticle/>) }}/>
    </div>
  </BrowserRouter>
);

function setIndexContent(el) {
  return (
    <IndexPage>
      <div className="content">
        {el}
      </div>
    </IndexPage>
  );
}