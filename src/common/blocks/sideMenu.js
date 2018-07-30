import React from 'react';
import {Link} from 'react-router-dom';

class SideMenu extends React.Component{
  render(){
    return (
      <div>
        <ul className="sideMenu">
          <li><Link to='/article'>onWheel</Link></li>
          <li>Вторая статья</li>
          <li>Третья статья</li>
        </ul>
      </div>

    )
  }
}

export default SideMenu;