const db = require("../models/tickets");
const dbUser = require("../models/auth");
const dbtrips = require("../models/admin");

const Tickets = db.Tickets;
const User = dbUser.user;
const trips = dbtrips.admin;
// Create and Save a new Ticket
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.trip_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Ticket
  const ticket = new Tickets({
    trip_id: req.body.trip_id,
    user_id: req.body.user_id,
    seat_number: req.body.seat_number,
    status: req.body.status,
  });

  const user = await User.findById(req.body.user_id);
  const passangerInfo = {
    name: user.full_name,
    email: user.email,
  };

  const trip = await trips.findById(req.body.trip_id);
  const tripInfo = {
    from: trip.from,
    to: trip.to,
  };

  const seat = await checkSeat(
    req,
    res,
    req.body.seat_number,
    req.body.trip_id
  );
  if (!seat) {
    saveSeat(req, res, req.body.seat_number, req.body.trip_id);
    ticket
      .save(ticket)
      .then((data) => {
        res.send({
          message: "Ticket was created successfully!",
          id: data._id,
          trip_id: data.trip_id,
          user_id: data.user_id,
          seat_number: data.seat_number,
          status: data.status,
          passangerInfo: passangerInfo,
          tripInfo: tripInfo,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Ticket.",
        });
      });
  } else {
    res.status(500).send({
      message: "Seat is already reserved",
    });
  }
};
// end of create

// get all tickets
exports.findAll = (req, res) => {
  Tickets.find()
    .then(async (data) => {
      const tickets = [];
      for (let i = 0; i < data.length; i++) {
        const user = await User.findById(data[i].user_id);
        const passangerInfo = {
          name: user.full_name,
          email: user.email,
        };

        const trip = await trips.findById(data[i].trip_id);
        const tripInfo = {
          from: trip.from,
          to: trip.to,
        };

        tickets.push({
          id: data[i]._id,
          user_id: data[i].user_id,
          user_info: passangerInfo,
          tripInfo: tripInfo,
          trip_id: data[i].trip_id,
          seat_number: data[i].seat_number,
          status: data[i].status,
        });
      }
      res.send(tickets);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tickets.",
      });
    });
};
// end of get all tickets

const checkSeat = async (req, res, seat_number, trip_id) => {
  const trip = await trips.findById(trip_id);
  const seats = trip.reserved_seats;
  if (seats.includes(seat_number)) {
    return true;
  }
  return false;
};

const saveSeat = async (req, res, seat_number, trip_id) => {
  trips
    .updateOne({ _id: trip_id }, { $push: { reserved_seats: seat_number } })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update trip with id=${id}. Maybe trip was not found!`,
        });
      } else return;
    });
};
