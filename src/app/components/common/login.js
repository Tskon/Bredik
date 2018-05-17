import React from 'react';
import { connect } from 'react-redux'
import { getUser } from "../../redusers/user-reducer";

class Login extends React.Component {
  render(){
    let login;
    if (this.props.user.user !== '') {
      login = (
        <div className="login-block">
          <h3>{this.props.user.user.givenName || this.props.user.user.displayName}</h3>
          <a className="login-block__link" href="/admin">Админ-панель</a>
          <a className="login-block__link" href="/logout">Выйти</a>
        </div>
      );
    } else {
      login = (
        <div className="login-block">
          <a className="login-block__login" href="/auth/google">Google login</a>
        </div>
      )
    }
    return <div>{login}</div>

  }
}

export default connect((state)=>{return {user: state.user}})(Login);