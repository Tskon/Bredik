import React from 'react';

// layouts
import IndexContent from './index-content';

// components
import Header from '../components/header/header';
import Menu from '../components/menu/main-menu';
import Footer from '../components/footer/footer';

export default class Index extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <Header/>
        <Menu path={window.location.pathname}/>
        <IndexContent/>
        <Footer/>
      </div>
    )
  }
}