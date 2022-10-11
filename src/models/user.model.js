const mongoose = require("mongoose");

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    full_name: String,
    age: Number,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
