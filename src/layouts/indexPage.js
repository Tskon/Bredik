import React from 'react';

import LeftBox from 'layouts/leftBox';
import Header from 'common/blocks/header';

class IndexPage extends React.Component{
  render(){
    return (
      <main className="container">
        <Header/>
        <LeftBox/>
      </main>
    )
  }
}

export default IndexPage;