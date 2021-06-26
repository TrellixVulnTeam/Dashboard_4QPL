const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const SignupModel = mongoose.model("signup", SignupSchema);

module.exports = SignupModel;
