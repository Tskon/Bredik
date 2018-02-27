import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar bg-primary main-menu">
        <span className="navbar-brand">Категории модулей</span>
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