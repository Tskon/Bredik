import React from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {Switch, Route} from 'react-router-dom';
import {getSolutions} from '~/app/actions/solution-actions';

import SolutionsList from '~/app/layouts/solutions-list';
import SolutionPage from '~/app/components/content/solution-page/solution-page';

class Routes extends React.Component {
    componentDidMount() {
        this.props.dispatch(getSolutions())
    }

    render() {
        console.log(this.props.solutions.javascript);
        return (
                <Switch>
                    <Route exact path="/"
                           render={() => <SolutionsList title='HTML/CSS/JS' solutions={this.props.solutions.htmlCssJs}/>}/>
                    <Route path="/javascript"
                           render={() => <SolutionsList title='Javascript' solutions={this.props.solutions.javascript}/>}/>
                    <Route path="/wp"
                           render={() => <SolutionsList title='Wordpress' solutions={this.props.solutions.wordpress}/>}/>
                    <Route path="/joomla"
                           render={() => <SolutionsList title='Joomla' solutions={this.props.solutions.joomla}/>}/>
                    <Route path="/drupal"
                           render={() => <SolutionsList title='Drupal' solutions={this.props.solutions.drupal}/>}/>
                    <Route path="/demo"
                           render={() => <SolutionPage title='Drupal' solutions={this.props.solutions.solutions}/>}/>
                </Switch>
        );
    }
}


function mapStateToProps(state) {
    return {
        solutions: state.solutions
    }
}

export default withRouter(connect(mapStateToProps)(Routes));