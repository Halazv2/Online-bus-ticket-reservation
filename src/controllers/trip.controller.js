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
  console.log(depart, arrive + "from controller");
  Admin.find({ destanition: { $in: [depart] }, citys: { $in: [arrive] } }).then(
    (data) => {
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
          res.send(data);
        }
      } else {
        res.status(404).send({
          message: "please enter depart and arrive",
        });
      }
    }
  );
};
