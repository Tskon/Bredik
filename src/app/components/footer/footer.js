import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className = "footer" id = "footer">
        <div className = "footer-top">
          <nav className = "footer-top__nav">
            <ul className="footer-top__nav-list">
              <li><Link to='/'>Главная</Link></li>
              <li><Link to='/'>HTML + CSS</Link></li>
              <li><Link to='/javascript'>JavaScript</Link></li>
              <li><Link to='/wp'>WordPress</Link></li>
              <li><Link to='/joomla'>Joomla</Link></li>
              <li><Link to='/drupal'>Drupal</Link></li>
            </ul>
          </nav>
        </div>
        <div className = "footer-bottom">
          <p className = "footer-bottom__copyright">&copy;2018 Bredik</p>
        </div>
      </footer>
    )
  }
}