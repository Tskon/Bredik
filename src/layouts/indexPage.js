import React from 'react';

import LeftBox from 'layouts/leftBox';
import Footer from 'layouts/footer';
import Header from 'common/blocks/header';

// code highlighting
import 'vendor/prism';

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