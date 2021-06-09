const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
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
