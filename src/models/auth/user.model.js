const mongoose = require("mongoose");

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    full_name: String,
    age: Number,
    email: String,
    password: String,
    // ref basically means that mongoose would store the ObjectId values
    // and when you call populate using those ObjectIds would fetch and fill the documents for you.
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
