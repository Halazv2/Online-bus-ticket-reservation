const { authJwt } = require("../middlewares");
const controller = require("../controllers/tickets.controller");
const sendMailController = require("../controllers/mail.controller");

const url = "/api/v1/mekna7";

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin: localhost:3000",
      "Access-Control-Allow-Methods: GET, POST, OPTIONS"
    );
    next();
  });

  app.post(`${url}/tickets`, controller.create);
  app.get(`${url}/tickets`, controller.findAll);
  app.post(`${url}/sendMail`, sendMailController.sendMail);
  app.get(`${url}/getTicketByID/:id`, controller.findOne);
};
