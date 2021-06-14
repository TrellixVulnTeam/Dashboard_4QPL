import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const add = () => {
    axios
      .post("http://localhost:3001/add", {
        mail: mail,
        password: password,
      })
      .then(() => {
        alert("it worked");
      })
      .catch(() => {
        alert("not working");
      });
  };

  return (
    <div className="container">
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
            onChange={(event) => {
              setMail(event.target.value);
            }}
          />
          <br></br>
          <input
            type="password"
            className="password"
            id="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <p className="text-center">Forgot Your Password ?</p>
          <div className="text-center">
            <button className="btn-login" onClick={add}>
              Login
            </button>
          </div>
        </div>
        <div className="col-md-6 form-pic"></div>
      </div>
    </div>
  );
}

export default App;
