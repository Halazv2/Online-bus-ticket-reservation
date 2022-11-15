const db = require("../models/tickets");
const dbUser = require("../models/auth");
const dbtrips = require("../models/admin");

const Tickets = db.Tickets;
const User = dbUser.user;
const trips = dbtrips.admin;
// Create and Save a new Ticket
exports.create = async (req, res) => {
  // Validate request
  if (!Object.keys(req.body).length === 10) {
    res.status(400).send({ message: "Content can not be empty! éé" });
    return;
  }

  // Create a Ticket
  const ticket = new Tickets({
    trip_id: req.body.trip_id,
    user_id: req.body.user_id,
    tripInfo: {
      from: req.body.from,
      to: req.body.to,
    },
    user_info: {
      name: req.body.name,
      email: req.body.email,
    },
    seat_number: req.body.seat_number,
    status: req.body.status,
    phoneNmber: req.body.phoneNmber,
    price: req.body.price,
  });

  const user = await User.findById(req.body.user_id);
  const passangerInfo = {
    name: req.body.user_id ? user.full_name : req.body.name,
    email: req.body.user_id ? user.email : req.body.email,
  };

  const seat = await checkSeat(
    req,
    res,
    req.body.seat_number,
    req.body.trip_id
  );
  if (!seat) {
    ticket
      .save(ticket)
      .then((data) => {
        saveSeat(req, res, req.body.seat_number, req.body.trip_id);
        res.send({
          message: "Your ticket has been booked successfully",
          id: data._id,
          trip_id: data.trip_id,
          user_id: data.user_id,
          seat_number: data.seat_number,
          status: data.status,
          passangerInfo: passangerInfo,
          tripInfo: data.tripInfo,
          price: data.price,
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

// get ticket by id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tickets.findById(id)
    .then(async (data) => {
      if (!data)
        res.status(404).send({ message: "Not found Ticket with id " + id });
      else {
        const user = (await User.findById(data.user_id)) || data.user_info;
        const passangerInfo = {
          name: user.full_name || user.name,
          email: user.email,
        };

        res.send({
          id: data._id,
          user_info: passangerInfo,
          tripInfo: data.tripInfo,
          trip_id: data.trip_id,
          seat_number: data.seat_number,
          status: data.status,
          price: data.price,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Ticket with id=" + id });
    });
};
