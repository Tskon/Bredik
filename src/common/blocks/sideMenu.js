import React from 'react';
import {Link} from 'react-router-dom';
import {getArticlesList} from 'redux/actions/article';
import {connect} from 'react-redux';
// import store from 'redux/store';

class SideMenu extends React.Component{
  componentDidMount(){
    this.props.dispatch(getArticlesList());
  }

  render(){
    return (
      <div>
        <ul className="sideMenu">
          {this.props.articlesList && this.props.articlesList.map((article)=>{
            const articleName = article.split('.')[0];
            return <li><Link to={articleName}>{articleName}</Link></li>
          })}
        </ul>
      </div>

    )
  }
}

export default connect((store)=>{
  return {
    articlesList: store.article.articlesList,
  }
})(SideMenu);