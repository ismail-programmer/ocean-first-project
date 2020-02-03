import React, { Component } from "react";
import { Link } from "react-router-dom";

const users = JSON.parse(localStorage.getItem("users")) || [];

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Signup extends Component {
  chkPass = password => {
    if (password.length < 8) {
      this.refs.chkPass.innerHTML = "password contain at least 8 characters";
      return false;
    } else {
      return true;
    }
  };

  chkConfirmPass = (password, confirmPassword) => {
    if (password === confirmPassword) {
      return true;
    } else {
      this.refs.chkConfirmPass.innerHTML = "Confirm password not match";
      return false;
    }
  };

  chkEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      this.refs.chkEmail.innerHTML = "invalid email";
      return false;
    }
  };

  chkExsis = email => {
    const index = users.findIndex(el => {
      return el.email === email;
    });
    if (index !== -1) {
      return false;
    }
    return true;
  };

  submitted = () => {
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;
    // 12345678
    if (
      this.chkEmail(email) &&
      this.chkPass(password) &&
      this.chkConfirmPass(password, confirmPassword) &&
      this.chkExsis(email)
    ) {
      let user = new User(name, email, password);
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    }
    return false;
  };
  componentDidMount() {
    document.forms[0].onsubmit = this.submitted;
  }
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <Link to="/home">
            <button className="btn grey-text white">Back to Home Page</button>
          </Link>
          <h2>Signup</h2>
          <form action="/login">
            <input type="text" ref="name" id="name" />
            <label htmlFor="name">Name</label>

            <input type="email" ref="email" id="email" />
            <label htmlFor="email">Email</label>
            <p ref="chkEmail"></p>

            <input type="password" ref="password" id="password" />
            <label htmlFor="password">Password</label>
            <p ref="chkPass"></p>

            <input type="password" ref="confirmPassword" id="confirmPassword" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <p ref="chkConfirmPass"></p>

            <button className="btn grey-text white">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
