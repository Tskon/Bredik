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
      this.CurrentArticle = Component;
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
    return <div>
      {this.state.articleComponents &&
      <div>
        {this.CurrentArticle ? <this.CurrentArticle.default/> : ''}
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