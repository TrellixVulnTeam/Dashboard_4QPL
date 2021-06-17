import react, { Component } from "react";
import "./login.css";
import axios from "axios";
import Signin from "./signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./registration";

class login extends Component {
  render() {
    return (
      <Router>
        <div className="box row">
          <div className="col-md-6">
            <Switch>
              <Route path="/signin">
                <Signin />
              </Route>
            </Switch>
            <Switch>
              <Route path="/registration">
                <Registration />
              </Route>
            </Switch>
          </div>

          <div className="col-md-6 form-pic"></div>
        </div>
      </Router>
    );
  }
}
export default login;
