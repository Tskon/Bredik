import React from 'react';
import axios from 'axios';

export default class TopBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      data: ''
    };

    //binds
    this.login = this.login.bind(this);
  }

  login(data) {
    this.setState({
      isAuth: true,
      data: data
    })
  }

  componentDidMount() {
    axios
      .post('/get/user')
      .then((res) => {
        if (res.data !== '') {
          this.login(res.data);
        }
      })
      .catch((err) => {
        console.log('Axios err in post request to /get/user', err)
      });
  }

  render() {
    return (
      <nav className={'top-block navbar navbar-expand'}>
        <div className="br-navbar-header">
          <a href="/" className="navbar-brand">логотип</a>
        </div>
        <div className="br-right-navbar">
        <ul className="nav navbar-nav float-right br-user-nav">
          <li className="nav-item dropdown">
            {/*Сама аватарка при нажатии на которую выпадает меню*/}
            <a href="#" data-toggle="dropdown" role="button" className="nav-link dropdown-toggle">
              <img src="img/admin/avatar-main.jpg" alt="Avatar" className="br-avatar-admin-img"/>
              <span className="br-user-name">Рыжий котец</span>
            </a>
            {/*Выпадающее меню с логином*/}
            <div role="menu" className="dropdown-menu">
              <div className="user-info">
                <div className="user-name">Рыжий Котец</div>
                <div className="user-position online">В сети</div>
              </div>
              {/* Инфрмация о человеке, вес, рост, возраст */}
              <a href="#" className="dropdown-item">
                <span className="icon mdi mdi-face"></span> Аккаунт
              </a>
              {/* Настройки аккаунта */}
              <a href="#" className="dropdown-item">
                <span className="icon mdi mdi-settings"></span> Settings
              </a>
              {/* Инфрмация о человеке, вес, рост, возраст */}
              <a href="/logout" className="dropdown-item">
                <span className="icon mdi mdi-power"></span> Выход
              </a>
            </div>
          </li>
        </ul>
        </div>
      </nav>
      /*<div className="top-block">
         <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <nav className="nav nav-pills flex-column flex-sm-row">
            <a className="flex-sm-fill text-sm-center nav-link active" href="/">View site</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="/logout">Exit</a>
          </nav>
        </nav>
      </div>*/
    )
  }
}