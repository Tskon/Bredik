import React from 'react';

import SolutionPagePreview from '../components/content/solution-page/preview';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <SolutionPagePreview id={1}/>
            <SolutionPagePreview id={2}/>
            <SolutionPagePreview id={3}/>
            <SolutionPagePreview id={4}/>
          </div>
          <div className="row">
            <SolutionPagePreview id={5}/>
            <SolutionPagePreview id={6}/>
            <SolutionPagePreview id={7}/>
            <SolutionPagePreview id={8}/>
          </div>
        </div>
        <div className="footer" id="footer">
          <div className="footer-top">

          </div>
          <div className="footer-bottom">

          </div>
        </div>
      </div>
    )
  }
}