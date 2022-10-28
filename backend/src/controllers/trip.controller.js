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
  const { depart, arrive } = req.body;
  Admin.find({
    destanition: { $elemMatch: { cities: { $all: [depart, arrive] } } },
  }).then((data) => {
    if (depart && arrive) {
      if (data == "") {
        res.status(404).send({
          message:
            "there is no trip from " +
            depart +
            " to " +
            arrive +
            " please try another trip",
        });
      } else {
        if (
          data[0].destanition[0].cities.indexOf(depart) <
          data[0].destanition[0].cities.indexOf(arrive)
        ) {
          res.send({
            message:
              "there is " +
              data.length +
              " trips from " +
              depart +
              " to " +
              arrive,
            data: data.map((item) => {
              return {
                id: item._id,
                destanition: [
                  {
                    cities: [depart, arrive],
                  },
                ],
                trip_type: item.trip_type,
                price: item.price,
                trip_status: item.trip_status,
                seats: item.seats,
                reserved_seats: item.reserved_seats,
              };
            }),
          });
        } else {
          res.status(404).send({
            message:
              "there is no trip from " +
              depart +
              " to " +
              arrive +
              " please try another trip",
          });
        }
      }
    } else {
      res.status(404).send({
        message: "please enter depart and arrive",
      });
    }
  });
};
