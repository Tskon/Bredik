import React from 'react';

import SideMenu from 'common/blocks/sideMenu';

class leftBox extends React.Component{
  render(){
    return(
      <div className="sideBar">
        <SideMenu/>
      </div>
    );
  }
}

export default leftBox;