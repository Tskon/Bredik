import React from 'react';
import axios from 'axios';

export default class TopBlock extends React.Component {
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
        console.log(res.data);
        if (res.data !== ''){
          this.login(res.data);
        }
      })
      .catch((err) => {
        console.log('Axios err in post request to /get/user', err)
      });
  }

  render() {
    return (
      <div className={'top-block'}>
        <nav className="navbar navbar-light bg-light">
          <nav className="nav nav-pills flex-column flex-sm-row">
            <a className="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
          </nav>
          <a href="/logout">Выйти</a>
          <a href="/">Открыть сайт</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>
    )
  }
}