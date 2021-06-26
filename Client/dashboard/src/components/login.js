import react, { Component } from "react";
import "./login.css";
import axios from "axios";
import Signin from "./signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./registration";

class login extends Component {
  render() {
    const url = window.location.pathname;
    console.log(url);
    return (
      <Router>
        <div className="box row">
          <div className="col-md-6">
            {url == "/" && <Signin />}
            {url == "/registration" && <Registration />}
          </div>

          <div className="col-md-6 form-pic"></div>
        </div>
      </Router>
    );
  }
}
export default login;
