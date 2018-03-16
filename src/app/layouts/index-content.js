import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HtmlCss from './solutions-list/html-css';
import Javascript from './solutions-list/javascript';
import Wordpress from './solutions-list/word-press';
import Joomla from './solutions-list/joomla';
import Drupal from './solutions-list/drupal';

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={HtmlCss}/>
          <Route path="/js" component={Javascript}/>
          <Route path="/wp" component={Wordpress}/>
          <Route path="/joomla" component={Joomla}/>
          <Route path="/drupal" component={Drupal}/>
        </Switch>
      </div>
    )
  }
}