import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '~/app/store';

// Layouts
import Main from '~/app/layouts/main';
import AdminMain from '~/app/layouts/admin-main';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/admin' component={AdminMain} />
        <Route path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('main'));