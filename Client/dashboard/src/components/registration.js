import "./login.css";
import react, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  render() {
    return (
      <main>
        <h3 className="heading-login">
          <strong>Registration</strong>
        </h3>
        <input type="email" className="email" id="email" placeholder="Email" />
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
          <br />
          <a href="/signin">
            <button className="btn-login">Back</button>
          </a>
        </div>
      </main>
    );
  }
}

export default Registration;
