import React from 'react';

import LeftBox from 'layouts/leftBox';
import Footer from 'layouts/footer';
import Header from 'common/blocks/header';

// code highlighting
import 'vendor/prism';

class IndexPage extends React.Component{
  componentDidMount(){
    Prism.highlightAll();
  }
  render(){
    return (
      <main className="container">
        <Header/>
        <LeftBox/>
        {this.props.children}
        <Footer/>
      </main>
    )
  }
}

export default IndexPage;