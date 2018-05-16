import React from 'react';

import Login from '~/app/components/common/login';
import MainMenu from '~/app/components/menu/main-menu';

export default class LeftBlock extends React.Component {
  render() {
    return (
      <div className="left-block">
        <MainMenu/>
        <Login/>
      </div>
    )
  }
}