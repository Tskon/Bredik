import React from 'react';
import {connect} from 'react-redux';

import {getArticlesList} from "redux/actions/article";

class ArticleWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      articleComponents: [],
      currentArticleIndex: 0,
    }
  }

  componentDidMount() {
    this.props.dispatch(getArticlesList());
  }

  componentDidUpdate(){
    if (this.props.articlesList && !this.state.currentArticle) {
      import(`content/articles/${this.props.articlesList[this.state.currentArticleIndex]}`).then(Component => {
        this.setState({currentArticle: Component});
      });
    }

    const currentArticleIndex = document.location.pathname.split('/')[2] - 1 || 0;
    console.log(this.state.currentArticleIndex,currentArticleIndex)
    if (this.state.currentArticleIndex !== currentArticleIndex) this.setState({currentArticleIndex: currentArticleIndex});

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