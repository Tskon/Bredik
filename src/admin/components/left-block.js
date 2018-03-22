import React from 'react';

export default class LeftBlock extends React.Component {
  render() {
    return (
      <div>
        <div className="br-left-sidebar">
          <div className="be-left-sidebar">
            <div className="left-sidebar-wrapper"><a href="#" className="left-sidebar-toggle">Dashboard</a>
              <div className="left-sidebar-spacer">
                  <div className="left-sidebar-content">
                    <ul className="sidebar-elements">
                      <li className="divider">Menu</li>
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
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}