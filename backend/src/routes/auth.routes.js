const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

const url = "/api/v1/mekna7";
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    `${url}/signup`,
    [verifySignUp.checkDuplicateEmail, verifySignUp.checkRolesExisted],
    controller.signup
  );
  app.post(`${url}/signin`, controller.signin);
  app.post(`${url}/verifyisAdmin`, controller.verifyisAdmin);
};
