import React from 'react';
import {connect} from 'react-redux';

class ArticleWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      articleComponents: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getArticlesList());

  }

  componentDidUpdate() {
    if (this.props.articlesList && !this.state.articleComponents.length) {
      this.props.articlesList.forEach(article => {
        const url = `content/articles/${article}`;
        import('content/articles/mutationObserver.js').then(Component => {
          this.setState({
            articleComponents: [...this.state.articleComponents, Component]
          })
        })
      })
    }
  }

  render() {
    return <div>
      {this.state.articleComponents && this.state.articleComponents.map((article, i) => {
        const Component = Loadable({
          loader: () => import('../content/articles/onwheelArticle'),
          loading: () => {
            return <div>Loading...</div>
          },
        });

        return (
          <div>
            <h2>{article}</h2>
            {Component}
          </div>)
      })
      }
    </div>
  }
}

export default connect((store) => {
  return {
    articlesList: store.article.articlesList,
  }
})(ArticleWrapper);