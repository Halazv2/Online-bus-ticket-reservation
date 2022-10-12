const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

const url = "/api/v1/mekna7";
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(`${url}/user`, controller.allAccess);
  app.get(`${url}/users`, [authJwt.verifyToken], controller.userBoard);
};
