const db = require("../models/admin");
const Admin = db.admin;

exports.createTrip = (req, res) => {
  const trip = new Admin({
    from: req.body.from,
    to: req.body.to,
    deperture_date: req.body.deperture_date,
    arrival_date: req.body.arrival_date,
    seats: req.body.seats,
    reserved_seats: req.body.reserved_seats,
    trip_status: req.body.trip_status,
    price: req.body.price,
  });

  trip.save((err, trip) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Trip was created successfully!" });
  });
}

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
