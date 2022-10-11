const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const route = require("./src/routes/auth.routes");
const cors = require("cors");
const db = require("./src/models");
const Role = db.role;

app.use(cors());
require("dotenv").config();

app.use(bodyParser.json());

db.mongoose
  .connect(
    `mongodb://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

require("./src/routes/auth.routes")(app);

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
