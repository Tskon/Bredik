import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router';
import {connect} from 'react-redux';
import {getSolutions} from '~/app/actions/solution-actions';

import SolutionsList from '~/app/layouts/solutions-list';
import SolutionPage from '~/app/components/content/solution-page/solution-page';

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch(getSolutions());
  }

  render() {
    const redirect = (window.location.hash) ? <Redirect to={window.location.hash.slice(1)}/> : '';

    return (
      <div className="container">
        {redirect}
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    solutions: state.solutions
  }
}

export default withRouter(connect(mapStateToProps)(Index));