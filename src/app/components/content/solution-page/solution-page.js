import React from 'react';

export default class SolutionPage extends React.Component {
  constructor() {
    super(...arguments);
    this.findCurrentSolution = this.findCurrentSolution.bind(this);
  }

  findCurrentSolution() {
    const currentSolutionCount = document.location.pathname.split('/').slice(-2);
    let currentSolution;

    this.props.solutions.forEach((item) => {
      if(+currentSolutionCount[0] === item['section-id'] && +currentSolutionCount[1] === item.id) {
        currentSolution = item;
      }
    });

    return currentSolution;
  }

  render() {
    let body;

    if(this.props.solutions.length) {
      const currentSolution = this.findCurrentSolution();

      body = (
        <div>
        <h1>{currentSolution.title}</h1>
        <p>{currentSolution.description}</p>
    {currentSolution.body}
      <div className="codepen-wrapper">
        <iframe scrolling='no' title='Some pen'
                src={currentSolution.codepen}
                frameBorder='no' allowFullScreen='true'/>
        </div>
        </div>
      )
    }

    return body || <div/>
  }
}