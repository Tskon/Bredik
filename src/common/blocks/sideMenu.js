import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class SideMenu extends React.Component{
  render(){
    return (
      <div>
        <ul className="sideMenu">
          {this.props.articlesList && this.props.articlesList.map((article, i)=>{
            const articleName = article.split('.')[0];
            return <li key={'article_' + i}><Link to={articleName}>{articleName}</Link></li>
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