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
  const { depart, arrive, deperture_date, passangers } = req.body;
  const getPrice = (start, end) => {
    let second = "00";
    console.log(start, end);
    start = start.split(":");
    end = end.split(":");

    let startDate = new Date(2022, 12, 5, start[0], start[1], second);
    let endDate = new Date(2022, 12, 5, end[0], end[1], second);
    let difference = endDate.getTime() - startDate.getTime();
    difference = difference / 1000;
    let hourDifference = Math.floor(difference / 3600);
    difference -= hourDifference * 3600;
    let minuteDifference = Math.floor(difference / 60);
    difference -= minuteDifference * 60;
    minuteDifference = minuteDifference / 60;
    let diff = minuteDifference + hourDifference;
    let price = 30 * diff;
    return price.toFixed(2);
  };
  Admin.find({
    destanition: { $elemMatch: { cities: { $all: [depart, arrive] } } },
    deperture_date: { $eq: deperture_date },
  }).then((data) => {
    if (depart && arrive && deperture_date) {
      if (
        data.map(
          (trip) =>
            trip.destanition[0].cities.indexOf(depart) <
            trip.destanition[0].cities.indexOf(arrive)
        )
      ) {
        let timeofdepart = data.map((trip) => {
          return trip.destanition[0].date[
            trip.destanition[0].cities.indexOf(depart)
          ];
        });
        let timeofarrive = data.map((trip) => {
          return trip.destanition[0].date[
            trip.destanition[0].cities.indexOf(arrive)
          ];
        });
        console.log(timeofdepart + " and " + timeofarrive);
        const getP = getPrice(timeofdepart[0], timeofarrive[0]);
        const filteredTrips = data.filter(
          (trip) => trip.reserved_seats.length + passangers <= trip.seats
        );
        if (filteredTrips.length > 0) {
          res.send({
            message: "there is " + filteredTrips.length + " trips",
            data: filteredTrips.map((trip) => {
              return {
                id: trip._id,
                destanition: [
                  {
                    cities: [depart, arrive],
                  },
                ],
                deperture_date: trip.deperture_date,
                timeofdepart: timeofdepart,
                price: getP,
                seats: trip.seats - trip.reserved_seats.length,
                reserved_seats: trip.reserved_seats,
                trip_type: trip.trip_type,
              };
            }),
          });
        } else {
          res.status(404).send({ message: "No trips found" });
        }
      } else {
        res.status(404).send({
          message:
            "there are no trips with this destanition please try another trip",
        });
      }
    } else {
      res.status(404).send({
        message: "please enter depart and arrive",
      });
    }
  });
};
