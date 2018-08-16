import React from 'react';
import {Link} from 'react-router-dom';
import {getArticlesList} from 'redux/actions/article';

class SideMenu extends React.Component{
  render(){
    getArticlesList();
    return (
      <div>
        <ul className="sideMenu">
          <li><Link to='/article1'>onWheel</Link></li>
          <li><Link to='/article2'>Mutation Observer</Link></li>
          <li>Третья статья</li>
        </ul>
      </div>

    )
  }
}

export default SideMenu;