import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <button className='btn btn-outline-primary btn-authorization-align' type="button" data-toggle="modal"
                data-target="#login-modal">Войти
        </button>
        <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Войдите в ваш аккаунт</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="form-group" action="/login" method="post">
                  <label htmlFor="email">Email</label>
                  <input type="emeil" name="email" placeholder="Your Email"/>
                  <br/>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="Your Password"/>
                  <button type="Login" className="btn btn-primary">Войти</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}