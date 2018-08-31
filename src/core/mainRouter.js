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
    if (this.props.articlesList && !this.state.articleComponents.length){
      console.log('content/articles/mutationObserver.js')
      this.props.articlesList.forEach(article => {
        const url = `content/articles/${article}`;
        console.log(url === 'content/articles/mutationObserver.js')
        import('content/articles/mutationObserver.js').then(Component => {
          this.setState({
            articleComponents: [...this.state.articleComponents, Component]
          })
        })
      })
    }
  }

  render() {
    console.log(this.state.articleComponents)
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={IndexPage}/>
          {this.state.articleComponents && this.state.articleComponents.map((article, i) => {
            console.log('/' + this.props.articlesList[i].split('.')[0])
            return <Route path={'/' + this.props.articlesList[i].split('.')[0]} key={'route_' + i} render={() => {
              //todo решить проблему с роутами Objects are not valid as a React child
              // const Component = Loadable({
              //   loader: () => import('../content/articles/onwheelArticle'),
              //   loading: () => {return <div>Loading...</div>},
              // })
              return this.setIndexContent(this.state.articleComponents);
            }}/>
          })}
          {/*<Route path='/article1' render={() => {*/}
          {/*return this.setIndexContent(<OnWheelArticle/>)*/}
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