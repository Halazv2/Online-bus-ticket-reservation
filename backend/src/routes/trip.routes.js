const { authJwt } = require("../middlewares");
const controller = require("../controllers/trip.controller");

const url = "/api/v1/mekna7";
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin: *",
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type"
    );
    if ("OPTIONS" == req.method) return res.send(200);
    next();
  });

  app.get(`${url}/trips`, [authJwt.verifyToken], controller.getTrips);
  app.get(`${url}/trip/:id`, [authJwt.verifyToken], controller.getTripById);
  app.post(`${url}/filter-trips`, controller.filterTrips);
};
