import React from 'react';
import {connect} from 'react-redux';

class SolutionPage extends React.Component {
  constructor(props) {
    super(props);
    this.findCurrentSolution = this.findCurrentSolution.bind(this);
    this.solutionsList = {
      1: this.props.solutions.htmlCssJs,
      2: this.props.solutions.javascript,
      3: this.props.solutions.wordpress,
      4: this.props.solutions.joomla,
      5: this.props.solutions.htmlCssJs
    }
  }

  findCurrentSolution() {
    const currentSolutionCount = document.location.pathname.split('/').slice(-2);
    this.props.solutions.forEach((item) => {
      if (+currentSolutionCount[ 0 ] === item[ 'section-id' ] && +currentSolutionCount[ 1 ] === item.id) {
        return item;
      }
    });
  }

  render() {
    console.log(this.props.solutions)
    let body;

    if (this.props.solutions.length) {
      let currentSolution = this.findCurrentSolution();
      console.log(currentSolution);
      body = (currentSolution) ? (
        <div>
          <h1>{currentSolution.title}</h1>
          <p>{currentSolution.description}</p>
          {currentSolution.body}
        </div>
      ) : false;
      console.log(body);
    }

    return body || <div/>
  }
}

export default connect(state => {return{solutions: state.solutions}})(SolutionPage);