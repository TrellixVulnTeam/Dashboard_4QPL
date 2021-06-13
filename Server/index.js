const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SignupModel = require("./Models/singup.js");

//DB Connection
mongoose.connect(
  "mongodb://localhost:27017/Registration?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  {
    useNewUrlParser: true,
  }
);

app.get("/insert", async (req, res) => {
  const singup = new SignupModel({
    mail: "osamashamim1997@gmail.com",
    password: "password",
  });

  await singup.save();
  res.send("Inserted data");
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
