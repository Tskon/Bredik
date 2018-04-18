import React from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {
  setActive(href) {
    return (this.props.path === href) ? 'sections-menu__item_active' : '';
  }

  render() {
    return (
      <nav className="sections-menu">
        <Link className={"sections-menu__item " + this.setActive("/")} to="/">HTML/CSS/JS</Link>
        <Link className={"sections-menu__item " + this.setActive("/javascript")} to="/javascript">JavaScript</Link>
        <Link className={"sections-menu__item " + this.setActive("/wp")} to="/wp">Wordpress</Link>
        <Link className={"sections-menu__item " + this.setActive("/joomla")} to="/joomla">Joomla</Link>
        <Link className={"sections-menu__item " + this.setActive("/drupal")} to="/drupal">Drupal</Link>
      </nav>
    )
  }
}
