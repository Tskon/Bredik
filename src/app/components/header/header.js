import React from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';

import EnterButton from '../modals/login-modal';

export default class Header extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isAuth: false,
      data: ''
    };

    //binds
     this.login = this.login.bind(this);
  }

  login(data){
    this.setState({
      isAuth: true,
      data: data
    })
  }

  componentDidMount(){
    axios
      .post('/get/user')
      .then((res) => {
        if (res.data !== ''){
          this.login(res.data);
        }
      })
      .catch((err) => {
        console.log('Axios err in post request to /get/user', err)
      });
  }

  render() {
    let login;

    if (this.state.isAuth) {
      login = (
        <div>
          <h3>{this.state.data.name.givenName || this.state.data.displayName}</h3>
          <a href="/admin">Админ-панель</a>
          <br/>
          <a href="/logout">Выйти</a>
        </div>
      );
    } else {
      login = <EnterButton/>;
    }

    return (
      <div className="container">
        <section className='header row justify-content-center'>
          <div className="col-md-9 col-sm-8 header__text">
            <h1 className='header__project-name'><a href='#'>Bredik</a></h1>
            <h5 className='header__project-description'>Сборник готовых решений для разработчика</h5></div>
          <div className="col-md-2 col-sm-2 header__login-btn-wrapper">
            {login}
          </div>
          <div className="col-md-2 col-sm-2 toggler-menu-align">
            <nav className="navbar navbar-expand-md">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </nav>
          </div>
        </section>
      </div>
    )
  }
}