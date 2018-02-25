import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <section className='header row'>
        <div className="col-10">
          <h1 className='header__project-name'><a href='#'>Bredik</a></h1>
          <h5>Сборник готовых решений для разработчика</h5></div>
        <div className="col-1">
          <a href='#' className='header__login-btn btn btn-outline-success'>Войти</a>
        </div>


      </section>
    )
  }
}