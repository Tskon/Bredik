import React from 'react';

export default class Header extends React.Component {
  render() {
    let login;
    if (this.props.user.user !== '') {
      login = (
        <div className="login-block">
          <h3>{this.props.user.user.givenName || this.props.user.user.displayName}</h3>
          <a className="login-block__link" href="/admin">Админ-панель</a>
          <a className="login-block__link" href="/logout">Выйти</a>
        </div>
      );
    } else {
      login = <a href="/auth/google">Google login</a>;
    }

    return (
      <header className="main-header">
        <div className="title">
          <h1 className="title__name"><a href='/'>Bredik</a></h1>
          <p className="title__description">Сборник готовых решений для разработчика</p>
        </div>
        {login}
      </header>
    )
  }
}