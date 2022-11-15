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
        default: null,
      },
    ],
    user_info: {
      name: {
        type: String,
        default: function () {
          this.user_info.name ? this.user_info.name : "Guest";
        },
      },
      email: {
        type: String,
        default: function () {
          this.user_info.email ? this.user_info.email : "Guest@d.com";
        },
      },
      required: false,
    },
    tripInfo: {
      from: {
        type: String,
      },
      to: {
        type: String,
      },
      required: false,
    },
    seat_number: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    phoneNmber: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  })
);

module.exports = Tickets;
