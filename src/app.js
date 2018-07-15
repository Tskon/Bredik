import React from 'react';
import ReactDom from 'react-dom';

import Header from './common/blocks/header';

class App extends React.Component {
  render(){
    ReactDom.render(Header, document.getElementById('mainApp'));
  }
}

export default App;

