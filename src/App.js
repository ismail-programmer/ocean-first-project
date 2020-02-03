import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

// * components
import Signup from "./components/SignupSystem/Signup";
import Login from "./components/LoginSystem/Login";
import Sucess from "./components/LoginSystem/Sucess";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sucess" component={Sucess} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
