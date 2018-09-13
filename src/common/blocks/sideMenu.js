import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getArticlesList} from 'redux/actions/article';

class SideMenu extends React.Component {
  componentDidMount(){
    this.props.dispatch(getArticlesList())
  }

  render() {
    return (
      <div>
        <ul className="sideMenu">
          {this.props.articlesList && this.props.articlesList.map((article, i) => {
            const articleName = article.split('.')[0];
            return <li key={'article_' + i}><Link to={'/article/' + ++i}>{articleName}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    articlesList: store.article.articlesList,
  }
})(SideMenu);