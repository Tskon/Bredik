import React from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {
  setActive(href) {
    return (this.props.path === href) ? 'sections-menu__item_active' : '';
  }

  toggleMenu() {
    const menu = document.querySelector('.sections-menu-burger');
    menu.classList.toggle('sections-menu-burger_active');
  }

  closeMenu(){
    const menu = document.querySelector('.sections-menu-burger');
    menu.classList.remove('sections-menu-burger_active')
  }

  render() {
    let burgerBtn;
    if (this.props.burger)
      burgerBtn = <button className="burger-btn" onClick={(e) => {
        this.toggleMenu(e.target)
      }} title={'Меню'}/>;

    return (
      <div>
        {burgerBtn}
        <nav className={(this.props.burger) ? "sections-menu-burger" : "sections-menu"}
             onClick={(this.props.burger) ? this.closeMenu : () => {}}>
          <Link className={"sections-menu__item " + this.setActive("/")} to="/">HTML/CSS/JS</Link>
          <Link className={"sections-menu__item " + this.setActive("/javascript")} to="/javascript">JavaScript</Link>
          <Link className={"sections-menu__item " + this.setActive("/wp")} to="/wp">Wordpress</Link>
          <Link className={"sections-menu__item " + this.setActive("/joomla")} to="/joomla">Joomla</Link>
          <Link className={"sections-menu__item " + this.setActive("/drupal")} to="/drupal">Drupal</Link>
        </nav>
      </div>
    )
  }
}
