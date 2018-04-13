import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Redirect} from 'react-router'

import HtmlCss from '~/app/layouts/solutions-list/html-css';
import Javascript from '~/app/layouts/solutions-list/javascript';
import Wordpress from '~/app/layouts/solutions-list/word-press';
import Joomla from '~/app/layouts/solutions-list/joomla';
import Drupal from '~/app/layouts/solutions-list/drupal';
import SolutionPage from '~/app/components/content/solution-page/solution-page';

export default class Index extends React.Component {
  render() {
    const redirect = (window.location.hash) ? <Redirect to={window.location.hash.slice(1)}/> : '';
    return (
      <div className="container">
        {redirect}
        <Switch>
          <Route exact path="/" component={HtmlCss}/>
          <Route path="/javascript" component={Javascript}/>
          <Route path="/wp" component={Wordpress}/>
          <Route path="/joomla" component={Joomla}/>
          <Route path="/drupal" component={Drupal}/>
          <Route path="/demo" component={SolutionPage}/>
        </Switch>
      </div>
    )
  }
}