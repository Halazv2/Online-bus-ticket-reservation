const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const route = require("./src/routes/auth.routes");
const cors = require("cors");
require("dotenv").config();
const { errorHandlers } = require("./src/middlewares/errorMiddlewares");
const connectDB = require("./src/config/db.config");

app.use(errorHandlers);
app.use(cors());
connectDB();
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

require("./src/routes/index.routes")(app);

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
