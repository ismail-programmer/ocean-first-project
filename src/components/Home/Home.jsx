import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container center">
        <div className="row ">
          <div className="col s6">
            <div className="App">
              <h1>Ocean Academy</h1>
              <h4>Welcome to Our academy!</h4>
              <div className="col s6">
                <Link to="/Signup">
                  <button className="btn grey-text white">Please Signup</button>
                </Link>
              </div>
              <div className="col s6">
                <Link to="/login">
                  <button className="btn grey-text white">Please Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
