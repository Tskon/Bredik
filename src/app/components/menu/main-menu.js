import React from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar bg-primary main-menu col-md-6 col-sm-12">
        <div className="container">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <Link className="nav-link active" to="/">HTML/CSS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/js">JavaScript</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wp">Wordpress</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/joomla">Joomla</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/drupal">Drupal</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
