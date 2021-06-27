import react, { Component } from "react";
import "./login.css";
import axios from "axios";
import Signin from "./signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./registration";
import Home from "./home";
class login extends Component {
  render() {
    const url = window.location.pathname;
    console.log(url);
    return (
      <Router>
        {url == "/home" && <Home />}

        {url == "/" && <Signin />}
        {url == "/registration" && <Registration />}
      </Router>
    );
  }
}
export default login;
