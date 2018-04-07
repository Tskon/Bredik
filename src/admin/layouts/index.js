import React from 'react';

import LeftBlock from '~/admin/components/left-block';
import TopBlock from '~/admin/components/top-block';
import ContentBlock from '~/admin/components/content-block';

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