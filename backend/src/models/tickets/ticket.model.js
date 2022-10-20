const mongoose = require("mongoose");

const Tickets = mongoose.model(
  "tickets",
  new mongoose.Schema({
    trip_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trips",
      required: true,
    },
    user_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    seat_number: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  })
);

module.exports = Tickets;
