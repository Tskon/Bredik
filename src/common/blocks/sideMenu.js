import React from 'react';

class SideMenu extends React.Component{
  render(){
    return (
      <div className="sideBar">
        <ul className="sideMenu">
          <li>Первая статья</li>
          <li>Вторая статья</li>
          <li>Третья статья</li>
        </ul>
      </div>

    )
  }
}

export default SideMenu;