import React from 'react';

import SolutionPagePreview from '../components/content/solution-page/preview';

export default class Index extends React.Component {
  render(){
    return (
      <div className="container">
        <Header/>
        <Menu/>
      </div>
    )
  }
}