const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./services/exampleService");
require("./models/Example");

mongoose.connect(keys.mongoURI);

const app = express();

// middlewares / services go here
app.use(bodyParser.json());

// routes go here
require("./routes/exampleRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
