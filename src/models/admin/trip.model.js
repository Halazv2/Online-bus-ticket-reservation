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
      required: true,
    },
    arrival_date: {
      type: Date,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    reserved_seats: {
      type: [Number],
    },
    trip_status: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  })
);

module.exports = Admin;
