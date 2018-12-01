import React, { Component } from 'react';
import ROUTES from '../../routes';

class Login extends Component {
  render() {
    return (
      <div id='login-section'>
        <h2>Login</h2>
        <form id='login-form'>
          <fieldset>
            <label>User Name:
              <input type='text' name='username'></input>
            </label>
            <label>Password:
              <input type='password' name='password'></input>
            </label>
            <div><a href={ROUTES.SEARCH}>Log In</a></div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Login;