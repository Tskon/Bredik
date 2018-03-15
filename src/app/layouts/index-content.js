import React from 'react';

import SolutionPagePreview from '../components/content/solution-page/preview';

export default class Index extends React.Component {
  render() {
    return (
      <div className="row index-content">
        <SolutionPagePreview id={1}/>
        <SolutionPagePreview id={2}/>
        <SolutionPagePreview id={3}/>
        <SolutionPagePreview id={4}/>
      </div>
    )
  }
}