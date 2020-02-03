import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  isCorrect = e => {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex(el => email === el.email);
    if (index !== -1) {
      if (users[index].password === password) {
        this.refs.chkEmail.style.display = `none`;
        localStorage.setItem("userIndex", JSON.stringify(index));
        return true;
      }
      this.refs.chkPass.innerHTML = "password is incorrect";
      return false;
    } else {
      this.refs.chkEmail.innerHTML = "user is not registered";
      return false;
    }
  };
  componentDidMount() {
    document.forms[0].onsubmit = this.isCorrect;
  }
  render() {
    return (
      <div className="container">
        <Link to="/home">
          <button className="btn white-text grey">Back to Home Page</button>
        </Link>
        <h1>Login Form</h1>
        <form action="/sucess" className="form">
          <div className="row">
            <div className="col s6 input-field">
              <input type="email" id="email" ref="email" />
              <label htmlFor="email">Email</label>
              <p ref="chkEmail"></p>
            </div>
          </div>
          <div className="row">
            <div className="col s6 input-field">
              <input type="password" id="password" ref="password" />
              <label htmlFor="password">Password</label>
              <p ref="chkPass"></p>
            </div>
          </div>
          <div className="row">
            <button className="btn white-text grey waves-block waves-effect">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
