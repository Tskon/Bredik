import Header from 'common/blocks/header';
import SideMenu from 'common/blocks/sideMenu';

import React from 'react';

class IndexPage extends React.Component{
  render(){
    return (
      <main className="container">
        <Header/>
        <SideMenu/>
      </main>
    )
  }
}

export default IndexPage;