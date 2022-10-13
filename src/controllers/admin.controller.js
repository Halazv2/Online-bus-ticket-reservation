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
};

exports.updateTrip = (req, res) => {
  const id = req.params.id;

  Admin.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update trip with id=${id}. cause it doesn't exist!`,
        });
      } else res.send({ message: "Trip was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating trip with id=" + id,
      });
    });
};

exports.deleteTrip = (req, res) => {
  const id = req.params.id;
  Admin.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          status: 404,
          message: `Cannot delete trip with id=${id}. cause it doesn't exist!`,
        });
      } else {
        res.send({
          status: 200,
          message: "Trip was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        status: 500,
        message: "Could not delete trip with id=" + id,
      });
    });
};
