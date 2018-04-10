import React from 'react';

import LeftBlock from '~/app/components/admin/left-block';
import TopBlock from '~/app/components/admin/top-block';
import ContentBlock from '~/app/components/admin/content-block';

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