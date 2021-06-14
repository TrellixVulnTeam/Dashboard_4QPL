const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const SignupModel = require("./Models/singup.js");
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

//DB Connection
mongoose.connect(
  "mongodb://localhost:27017/Registration?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  {
    useNewUrlParser: true,
  }
);

app.post("/add", async (req, res) => {
  const mail = req.body.mail;
  const password = req.body.password;

  const singup = new SignupModel({
    mail: mail,
    password: password,
  });
  await singup.save();
  res.send("Success");
});

app.get("/read", async (req, res) => {
  SignupModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3001, () => console.log("You are connected"));
