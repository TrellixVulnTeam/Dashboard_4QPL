import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="background">
      <div className="container">
        <Login></Login>
      </div>
    </div>
  );
}

export default App;
