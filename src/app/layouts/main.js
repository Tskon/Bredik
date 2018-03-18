import React from 'react';
import {connect} from 'react-redux';

// layouts
import IndexContent from './index-content';

// components
import Header from '../components/header/header';
import Menu from '../components/menu/main-menu';
import Footer from '../components/footer/footer';

// import {setAppState} from '../../redux/actions/app-state';

// @connect((store) => {
//   return {
//     appState: store.appState
//   }
// })

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