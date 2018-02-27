import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar bg-primary main-menu col-md-6 col-sm-12">
        <div className="navbar-brand">Категории модулей</div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">HTML/CSS/JS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Joomla</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Wordpress</a>
          </li>

        </ul>
      </nav>
    )
  }
}