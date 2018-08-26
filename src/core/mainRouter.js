import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Loadable from 'react-loadable';

import {getArticlesList} from 'redux/actions/article';

import IndexPage from 'layouts/indexPage';

// import OnWheelArticle from 'content/articles/onwheelArticle';
// import MutationObserverArticle from 'content/articles/mutationObserver';

class MainRouter extends React.Component {
  constructor(){
    super();
    this.state = {
      articleComponents: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getArticlesList());

  }

  componentDidUpdate(){
    if (this.props.articlesList){
      this.props.articlesList.forEach((article) => {
        import('content/articles/' + article).then(Component => {
          console.log(123)
          console.log('sdsds',Component)
          this.setState({
            articleComponents: [...this.state.articleComponents, Component]
          })
        })
      })
    }
  }

  render() {
    console.log(this.props.articlesList, this.state.articleComponents)
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={IndexPage}/>
          {this.props.articlesList && this.props.articlesList.map((article, i) => {
            const articleName = article.split('.')[0];
            console.log(articleName)
            return <Route path={'/' + articleName} key={'route_' + i} render={() => {
              const Component = Loadable({
                loader: () => import('../content/articles/onwheelArticle'),
                loading: () => {return <div>Loading...</div>},
              })
              return this.setIndexContent(<Component/>);
            }}/>
          })}
          {/*<Route path='/article1' render={() => {*/}
          {/*return this.setIndexContent(<OnWheelArticle/>)*/}
          {/*}}/>*/}
          {/*<Route path='/article2' render={() => {*/}
          {/*return this.setIndexContent(<MutationObserverArticle/>)*/}
          {/*}}/>*/}
        </div>
      </BrowserRouter>
    )
  }

  setLoadableUrl(url) {
    return import(url)
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

export default connect((store) => {
  return {
    articlesList: store.article.articlesList,
  }
})(MainRouter);