import React from 'react';
import {Link} from 'react-router-dom';

class SideMenu extends React.Component{
  render(){
    return (
      <div>
        <ul className="sideMenu">
          <li><Link to='/article1'>onWheel</Link></li>
          <li><Link to='/article2'>onWheel</Link></li>
          <li>Третья статья</li>
        </ul>
      </div>

    )
  }
}

export default SideMenu;