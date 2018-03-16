import React from 'react';

import SolutionPagePreview from '../../components/content/solution-page/preview';

export default class Javascript extends React.Component {
  render() {
    return (
      <div>
        <h1>JavaScript решения</h1>
        <div className="row">
          <SolutionPagePreview id={1}/>
          <SolutionPagePreview id={2}/>
          <SolutionPagePreview id={3}/>
          <SolutionPagePreview id={4}/>
          <SolutionPagePreview id={5}/>
          <SolutionPagePreview id={6}/>
          <SolutionPagePreview id={7}/>
          <SolutionPagePreview id={8}/>
        </div>
      </div>
    )
  }
}