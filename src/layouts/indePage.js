import Header from 'common/blocks/header';
import SideMenu from 'common/blocks/sideMenu';

import React from 'react';

class IndexPage extends React.Component{
  render(){
    return (
      <div className="container">
        <Header/>
        <SideMenu/>
      </div>
    )
  }
}

export default IndexPage;