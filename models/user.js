const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 5,
  },
});

const User = mongoose.model("User", userSchema, "user");
module.exports = User;
