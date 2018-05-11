import React from 'react';

export default class SolutionPage extends React.Component {
    constructor() {
        super(...arguments);
        this.findCurrentSolution = this.findCurrentSolution.bind(this);
    }

    findCurrentSolution() {
        const currentSolutionCount = document.location.pathname.split('/').slice(-2);
        this.props.solutions.forEach((item) => {
            if (+currentSolutionCount[0] === item['section-id'] && +currentSolutionCount[1] === item.id) {
                console.log(item)
                return item;
            }
        });
    }

    render() {
        let body;

        if (this.props.solutions.length) {
            let currentSolution = this.findCurrentSolution();

            body = (currentSolution) ? (
                <div>
                    <h1>{currentSolution.title}</h1>
                    <p>{currentSolution.description}</p>
                    {currentSolution.body}
                </div>
            ) : false;
            console.log(this.props.solutions);
            console.log(body);
        }

        return body || <div/>
    }
}