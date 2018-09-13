import React from 'react';
import {connect} from 'react-redux';
import Loadable from 'react-loadable';

import {getArticlesList} from "redux/actions/article";

class ArticleWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      articleComponents: [],
      currentArticle: null
    }
  }

  componentDidMount() {
    this.props.dispatch(getArticlesList());
  }

  componentDidUpdate(){
    if (this.props.articlesList && !this.state.currentArticle) {
      import(`content/articles/${this.props.articlesList[0]}`).then(Component => {
        this.setState({currentArticle: Component});
      })
    }
  }

  render() {
    return <div>{this.state.currentArticle ? <this.state.currentArticle.default/> : ''}</div>
  }
}

export default connect((store) => {
  return {
    articlesList: store.article.articlesList,
  }
})(ArticleWrapper);