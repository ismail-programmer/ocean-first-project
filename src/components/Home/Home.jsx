import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container center">
        <div className="row ">
          <div className="col s12">
            <div className="App">
              <h1>Ocean Academy</h1>
              <h4>Welcome to Our academy!</h4>
              <div className="col s6">
                <Link to="/Signup">
                  <button className="white-text grey btn">Please Signup</button>
                </Link>
              </div>
              <div className="col s6">
                <Link to="/login">
                  <button className="btn white-text grey">Please Login</button>
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
