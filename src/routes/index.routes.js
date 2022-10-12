module.exports = function (app) {
  require("./auth.routes")(app);
  require("./user.routes")(app);
  require("./admin.routes")(app);
};
