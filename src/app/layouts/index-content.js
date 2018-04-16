import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Redirect, withRouter} from 'react-router';
import {connect} from 'react-redux';
import {getSolutions} from '~/app/actions/solution-actions';

import HtmlCss from '~/app/layouts/solutions-list/html-css';
import Javascript from '~/app/layouts/solutions-list/javascript';
import Wordpress from '~/app/layouts/solutions-list/word-press';
import Joomla from '~/app/layouts/solutions-list/joomla';
import Drupal from '~/app/layouts/solutions-list/drupal';
import SolutionPage from '~/app/components/content/solution-page/solution-page';

class Index extends React.Component {
  componentDidMount(){
    this.props.dispatch(getSolutions());
  }
  render() {
    console.log('render sol')
    const redirect = (window.location.hash) ? <Redirect to={window.location.hash.slice(1)}/> : '';
    return (
      <div className="container">
        {redirect}
        <Switch>
          <Route exact path="/" component={HtmlCss} solutions={this.props.solutions.htmlCssJs}/>
          <Route path="/javascript" component={Javascript} solutions={this.props.solutions.javascript}/>
          <Route path="/wp" component={Wordpress} solutions={this.props.solutions.wordpress}/>
          <Route path="/joomla" component={Joomla} solutions={this.props.solutions.joomla}/>
          <Route path="/drupal" component={Drupal} solutions={this.props.solutions.drupal}/>
          <Route path="/demo" component={SolutionPage}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    solutions: state.solutions
  }
}

export default withRouter(connect(mapStateToProps)(Index));