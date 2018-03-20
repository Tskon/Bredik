import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className = "footer" id = "footer">
        <div className = "footer-top">
          <nav className = "footer-top__nav">
            <ul className="footer-top__nav-list">
              <li><a href='#'>Главная</a></li>
              <li><a href='#'>HTML + CSS</a></li>
              <li><a href='#'>JavaScript</a></li>
              <li><a href='#'>WordPress</a></li>
              <li><a href='#'>Joomla</a></li>
              <li><a href='#'>Drupal</a></li>
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