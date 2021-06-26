import "./login.css";
import react, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: "", lname: "", username: "", mail: "", password: "" };

    this.handleFname = this.handleFname.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.add = this.add.bind(this);
  }
  handleFname(event) {
    this.setState({ fname: event.target.value });
  }
  handleLname(event) {
    this.setState({ lname: event.target.value });
  }
  handleUsername(event) {
    this.setState({ username: event.target.value });
  }
  handleMail(event) {
    this.setState({ mail: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  add(event) {
    axios
      .post("http://localhost:3001/add", {
        fname: this.state.fname,
        lname: this.state.lname,
        username: this.state.username,
        mail: this.state.mail,
        password: this.state.password,
      })
      .then(() => {
        alert("it worked");
      })
      .catch(() => {
        alert("not working");
      });
  }
  render() {
    return (
      <main>
        <h3 className="heading-login">
          <strong>Registration</strong>
        </h3>
        <input
          type="text"
          className="inputs half-inputs"
          id="fname"
          placeholder="Firstname"
          value={this.state.fname}
          onChange={this.handleFname}
        />
        <input
          type="text"
          className="half-inputs"
          id="lname"
          placeholder="Lastname"
          value={this.state.lname}
          onChange={this.handleLname}
        />
        <input
          type="text"
          className="inputs"
          id="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleUsername}
        />
        <br></br>
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
        <br></br>
        <div className="text-center">
          <button className="btn-login" onClick={this.add}>
            Register
          </button>
          <br />
          <a href="/">
            <button className="btn-back">Back</button>
          </a>
        </div>
      </main>
    );
  }
}

export default Registration;
