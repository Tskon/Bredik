import React from "react";
import {Route, HashRouter, Switch} from 'react-router-dom';

import IndexPage from 'layouts/indexPage';

import ArticleWrapper from 'content/articleWrapper'

class MainRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
          <Route path={'/article/:id'} render={()=>{
            return this.setIndexContent(<ArticleWrapper/>)
          }}/>
          <Route path='/' component={IndexPage}/>
          </Switch>
        </div>
      </HashRouter>
    )
  }


  setIndexContent(el) {
    return (
      <IndexPage>
        <div className="content">
          {el}
        </div>
      </IndexPage>
    );
  }
}

export default MainRouter;