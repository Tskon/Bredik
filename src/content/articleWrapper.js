import React from 'react';
import {connect} from 'react-redux';
import Loadable from 'react-loadable';

import {getArticlesList} from "redux/actions/article";

class ArticleWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      articleComponents: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getArticlesList());
    import('content/articles/mutationObserver.js').then(Component => {
      this.Component = Component;
      })

  }

  componentDidUpdate() {
    // if (this.props.articlesList && !this.state.articleComponents.length) {
    //   this.props.articlesList.forEach(article => {
    //     const url = `content/articles/${article}`;
    //     import('content/articles/mutationObserver.js').then(Component => {
    //       this.setState({
    //         articleComponents: [...this.state.articleComponents, Component]
    //       })
    //     })
    //   })
    // }
  }

  render() {
    console.log(this.Component)
    // const Component = Loadable({
    //   loader: () => import('./articles/onwheelArticle'),
    //   loading: () => {
    //     return <div>Loading...</div>
    //   },
    // });
    return <div>
      {this.state.articleComponents &&
      <div>
        <h2>Заголовок</h2>
        {this.Component}
      </div>
      }
    </div>
  }
}

export default connect((store) => {
  return {
    articlesList: store.article.articlesList,
  }
})(ArticleWrapper);