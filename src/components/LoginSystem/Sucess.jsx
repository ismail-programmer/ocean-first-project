import React, { Component } from "react";
import { Link } from "react-router-dom";

const users = JSON.parse(localStorage.getItem("users")) || [];
const index = localStorage.getItem("userIndex") || [];

let loggedUser = users[index];

class Sucess extends Component {
  render() {
    return (
      <div>
        <Link to="/home">
          <button className="btn white-text grey">Back to Home Page</button>
        </Link>
        <h1>Hey! {loggedUser.name}</h1>
        <h3>You are login successfully!</h3>
      </div>
    );
  }
}

export default Sucess;
