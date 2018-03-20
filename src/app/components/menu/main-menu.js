import React from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {
  setActive(href) {
    return (this.props.path === href) ? 'active' : '';
  }

  render() {
    return (
      <nav className="navbar main-menu navbar-expand-lg">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/")} to="/">HTML/CSS</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/javascript")} to="/javascript">JavaScript</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/wp")} to="/wp">Wordpress</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/joomla")} to="/joomla">Joomla</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/drupal")} to="/drupal">Drupal</Link>
            </li>
          </ul>
          </div>
      </div>
      </nav>
      /*<nav className="navbar bg-primary main-menu col-md-6 col-sm-12">
        <div className="container">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/")} to="/">HTML/CSS</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/javascript")} to="/javascript">JavaScript</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/wp")} to="/wp">Wordpress</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/joomla")} to="/joomla">Joomla</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + this.setActive("/drupal")} to="/drupal">Drupal</Link>
            </li>
          </ul>
        </div>
      </nav>*/
    )
  }
}
