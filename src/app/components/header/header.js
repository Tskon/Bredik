import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <section className='header row justify-content-center'>
        <div className="col-9 offset-md-1 header__text">
          <h1 className='header__project-name'><a href='#'>Bredik</a></h1>
          <h5 className='header__project-description'>Сборник готовых решений для разработчика</h5></div>
        <div className="col-md-2 col-sm-6 header__login-btn-wrapper">
          <a href='/admin' className='btn btn-outline-primary'>Войти</a>
        </div>
      </section>
    )
  }
}