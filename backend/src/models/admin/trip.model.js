const mongoose = require("mongoose");

const Admin = mongoose.model(
  "trips",
  new mongoose.Schema({
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    deperture_date: {
      type: Date,
    },
    arrival_date: {
      type: Date,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    destanition: [
      {
        cities: {
          type: [String],
          required: true,
        },
        date: {
          type: [String],
          required: true,
        },
      },
    ],
    reserved_seats: [
      {
        type: [Number],
      },
    ],
    trip_status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    trip_type: {
      type: String,
      enum: ["premium", "normal", "economy", "vip"],
      default: "normal",
    },
    price: {
      type: Number,
      required: true,
    },
  })
);

module.exports = Admin;
