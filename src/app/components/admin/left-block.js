import React from 'react';

export default class LeftBlock extends React.Component {
  render() {
    return (
      <div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu__title">Menu</li>
          <li>
            <a href="#">
              <span>Панель</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Какой-то пункт меню</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Какой-то пункт меню</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Какой-то пункт меню</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}