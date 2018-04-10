import React from 'react';
import {connect} from 'react-redux';

// layouts
import IndexContent from '~/app/layouts/index-content';

// components
import Header from '~/app/components/header/header';
import Menu from '~/app/components/menu/main-menu';
import Footer from '~/app/components/footer/footer';

export default class Index extends React.Component {
  render() {
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