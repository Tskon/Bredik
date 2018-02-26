import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <section className='header row justify-content-center'>
        <div className="col-md-4 header__logo"></div>
        <div className="col-md-4 col-sm-10 header__text">
          <h1 className='header__project-name'><a href='#'>Bredik</a></h1>
          <h5 className='header__project-description'>Сборник готовых решений для разработчика</h5></div>
        <div className="col-2 offset-md-2 header__login-btn-wrapper">
          <a href='/admin' className='btn btn-outline-primary'>Войти</a>
        </div>
      </section>
    )
  }
}