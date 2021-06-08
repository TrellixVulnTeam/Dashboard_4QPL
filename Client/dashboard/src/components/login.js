import react, { Component } from "react";
import "./login.css";

class login extends Component {
  state = {};
  render() {
    return (
      <div className="box row">
        <div className="col-md-6">
          <h3 className="heading-login">
            <strong>Login</strong>
          </h3>
          <input
            type="email"
            className="email"
            id="email"
            placeholder="Email"
          />
          <br></br>
          <input
            type="password"
            className="password"
            id="password"
            placeholder="Password"
          />

          <p className="text-center">Forgot Your Password ?</p>
          <div className="text-center">
            <button className="btn-login">Login</button>
          </div>
        </div>
        <div className="col-md-6 form-pic"></div>
      </div>
    );
  }
}

export default login;
