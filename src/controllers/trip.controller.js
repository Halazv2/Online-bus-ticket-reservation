const db = require("../models/admin");
const Admin = db.admin;

exports.getTrips = (req, res) => {
  Admin.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving trips.",
      });
    });
};

exports.getTripById = (req, res) => {
  const id = req.params.id;
  Admin.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found trip with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving trip with id=" + id });
    });
};

exports.filterTrips = (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const deperture_date = req.query.deperture_date;
  const arrival_date = req.query.arrival_date;
  const seats = req.query.seats;
  const reserved_seats = req.query.reserved_seats;
  const trip_status = req.query.trip_status;
  const price = req.query.price;

  var condition = /* A query to find all trips that have the from field that matches the from query
  parameter. */
  { from: { $regex: new RegExp(from), $options: "i" } };

  Admin.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving trips.",
      });
    });
};
