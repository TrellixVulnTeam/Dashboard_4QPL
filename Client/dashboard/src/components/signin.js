import "./login.css";
import react, { Component } from "react";
import axios from "axios";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { mail: "", password: "" };

    this.handleMail = this.handleMail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.add = this.add.bind(this);
  }

  handleMail(event) {
    this.setState({ mail: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  add(event) {}

  render() {
    return (
      <main>
        <h3 className="heading-login">
          <strong>Login</strong>
        </h3>
        <input
          type="email"
          className="inputs"
          id="email"
          placeholder="Email"
          value={this.state.mail}
          onChange={this.handleMail}
        />
        <br></br>
        <input
          type="password"
          className="inputs"
          id="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePassword}
        />

        <p className="text-center">Forgot Your Password ?</p>
        <div className="text-center">
          <button className="btn-login" onClick={this.add}>
            Login
          </button>
          <br />
          <a href="/registration">
            <button className="btn-register">New User ? Register Now</button>
          </a>
        </div>
      </main>
    );
  }
}

export default Signin;
