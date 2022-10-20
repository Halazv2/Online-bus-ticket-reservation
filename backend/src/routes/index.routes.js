module.exports = function (app) {
  require("./auth.routes")(app);
  require("./admin.routes")(app);
  require("./trip.routes")(app);
  require("./tickets.routes")(app);
};
