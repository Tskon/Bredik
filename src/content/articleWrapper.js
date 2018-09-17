import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {getArticlesList} from "redux/actions/article";

class ArticleWrapper extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      articleComponents: [],
      currentArticle: null,
      currentArticleId: null
    }

    this.needUpdate = true;
  }

  componentDidMount() {
    this.props.dispatch(getArticlesList());
  }

  shouldComponentUpdate(){
    return true;
  }


  componentDidUpdate(){
    if (this.props.match.params.id !== this.state.currentArticleId)  this.needUpdate = true;

    if (this.props.articlesList && this.needUpdate) {
      import(`content/articles/${this.props.articlesList[this.props.match.params.id - 1]}`).then(Component => {
        this.setState({
          currentArticle: Component,
          currentArticleId: this.props.match.params.id
        });
        this.needUpdate = false;
      });
    }
  }

  render() {
    return <div>{this.state.currentArticle ? <this.state.currentArticle.default/> : ''}</div>
  }
}

export default withRouter(connect((store) => {
  return {
    articlesList: store.article.articlesList,
  }
})(ArticleWrapper));