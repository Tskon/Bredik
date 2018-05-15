import React from 'react';

export default class Header extends React.Component {

  render() {
    let menu = '';
    if(this.props.menu) menu = this.props.menu;

    return (
      <header className="main-header">
        {menu}
        <div className="title">
          <h1 className="title__name"><a href='/'>Bredik</a></h1>
          <p className="title__description">Сборник готовых решений для разработчика</p>
        </div>
      </header>
    )
  }
}