import React from 'react';

import LeftBox from 'layouts/leftBox';
import Footer from 'layouts/footer';
import Header from 'common/blocks/header';

class IndexPage extends React.Component{
  render(){
    return (
      <main className="container">
        <Header/>
        <LeftBox/>
        <Footer/>
      </main>
    )
  }
}

export default IndexPage;