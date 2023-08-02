import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/Signup";
import welcome from "./components/Welcome";
import forgotpassword from "./components/ForgotPassword";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/welcome" component={welcome} />
        <Route path="/forgotpassword" component={forgotpassword} />
      </Switch>
    </Router>
  );
}

export default App;
