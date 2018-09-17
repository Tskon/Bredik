import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
      <header className="mainHeader ">
        <h1><Link to="/">Bredik</Link></h1>
        <p>Test page</p>
      </header>
    )
  }
}

export default Header;