import react, { Component } from "react";
import "./login.css";
import axios from "axios";

class login extends Component {
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
  add(event) {
    axios
      .post("http://localhost:3001/add", {
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
    return <div></div>;
  }
}

export default login;
