import React from "react";
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import IndexPage from 'layouts/indexPage';

import ArticleWrapper from 'content/articleWrapper'

class MainRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={IndexPage}/>
          // todo сделать универсальный адрес для статей
          <Route path={'/article'} render={()=>{
            return this.setIndexContent(<ArticleWrapper/>)
          }}/>
        </div>
      </BrowserRouter>
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