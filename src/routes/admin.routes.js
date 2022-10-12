const { authJwt } = require("../middlewares");
const controller = require("../controllers/admin.controller");

const url = "/api/v1/mekna7";
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    `${url}/admin`,
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post(
    `${url}/admin/createTrip`,
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createTrip
  );
};
