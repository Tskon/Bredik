import React from 'react';

import LeftBlock from '../components/left-block';
import TopBlock from '../components/top-block';
import ContentBlock from '../components/content-block';

export default class Index extends React.Component {
  render() {
    return (
      <div className='container'>
        <TopBlock/>
        <LeftBlock/>
        <ContentBlock/>
      </div>
    )
  }
}