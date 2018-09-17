import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {getArticlesList} from "redux/actions/article";

class ArticleWrapper extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      articleComponents: [],
    }
  }

  componentDidMount() {
    this.props.dispatch(getArticlesList());
  }

  shouldComponentUpdate(){
    return true;
  }


  componentDidUpdate(){
    if (this.props.articlesList && !this.state.currentArticle) {
      import(`content/articles/${this.props.articlesList[this.props.match.params.id - 1]}`).then(Component => {
        this.setState({currentArticle: Component});
      });
    }

  }

  render() {
    console.log(this.props.match.params.id)
    return <div>{this.state.currentArticle ? <this.state.currentArticle.default/> : ''}</div>
  }
}

export default withRouter(connect((store) => {
  return {
    articlesList: store.article.articlesList,
  }
})(ArticleWrapper));