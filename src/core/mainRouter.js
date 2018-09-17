import React from "react";
import {Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

import IndexPage from 'layouts/indexPage';

import ArticleWrapper from 'content/articleWrapper'

class MainRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path={'/article/:id'} render={()=>{
            return this.setIndexContent(<ArticleWrapper/>)
          }}/>
          <Route path='/' component={IndexPage}/>
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